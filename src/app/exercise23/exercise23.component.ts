import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import 'moment/locale/fr';
import 'moment/locale/ja';

@Component({
  selector: 'app-exercise23',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    provideMomentDateAdapter(),
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exercise23.component.html',
  styleUrl: './exercise23.component.scss'
})
export class Exercise23Component {
  selected1!: Date;
  selected2!: Date;
  selected3!: Date;
  selected4!: Date;
  selected5!: Date;
  selected6!: Date;

  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _intl = inject(MatDatepickerIntl);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  readonly dateFormatString = computed(() => {
    if (this._locale() === 'ja-JP') {
      return 'YYYY/MM/DD';
    } else if (this._locale() === 'fr') {
      return 'DD/MM/YYYY';
    }
    return '';
  });

  ngOnInit() {
    this.updateCloseButtonLabel('カレンダーを閉じる');
  }

  french() {
    this._locale.set('fr');
    this._adapter.setLocale(this._locale());
    this.updateCloseButtonLabel('Fermer le calendrier');
  }

  updateCloseButtonLabel(label: string) {
    this._intl.closeCalendarLabel = label;
    this._intl.changes.next();
  }
}
