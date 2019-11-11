import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-feed-dialog',
  templateUrl: './feed-dialog.component.html',
  styleUrls: ['./feed-dialog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedDialogComponent implements OnInit {
  @ViewChild('textArea', { static: true }) textArea: ElementRef<HTMLTextAreaElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private matDialogRef: MatDialogRef<FeedDialogComponent>
    ) {
  }

  ngOnInit() { }

  post() {
    console.log(this.textArea.nativeElement.value);
  }

  imageError() {
    this.matDialogRef.close();
  }
}