
import { Component, input, output } from '@angular/core'

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialog {
  title = input<string>('Confirm')
  message = input<string>('Are you sure?')
  confirmText = input<string>('Confirm')
  cancelText = input<string>('Cancel')

  confirmed = output<void>()
  cancelled = output<void>()
}