import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ClaimDetail } from 'src/app/app.model';
import { ClaimDetailService } from 'src/app/services/claim-detail.service';
import { PartDetailService } from 'src/app/services/part-detail.service';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.scss']
})
export class ClaimDetailComponent implements OnInit {

  constructor(
    private partsService: PartDetailService,
    private claimService: ClaimDetailService,
  ) { }

  ngOnInit(): void {
    // Get an observable of ClaimDetail[]. Without part desc.
    let claimWithNoPartDesc$ = this.claimService.getClaims();

    // Create an observable of ClaimDetail[] with part desc.
    let claimWithPartDesc$ = claimWithNoPartDesc$.pipe(
      // convert ClaimDetail[] to Observable<PartDetail[]>
      map(claims => claims.map(claim =>
        this.partsService.getPartById(claim.partId).pipe(
            map(partDetail => {
              const claimDetail: ClaimDetail = {
                ...claim
              };
              if (partDetail) {
                claimDetail.partDesc = partDetail.partDesc;
              }
              return claimDetail;
            })
          )
      )),
      switchMap(claimsObsArray => forkJoin(claimsObsArray))
    );


    claimWithPartDesc$.subscribe(claims => console.log(claims));
  }

}
