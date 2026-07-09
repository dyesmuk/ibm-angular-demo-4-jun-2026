import {
  Injectable, inject, signal,
  ApplicationRef, createComponent, EnvironmentInjector,
} from '@angular/core'
import { ConfirmDialog } from '../../components/confirm-dialog/confirm-dialog'
import { ConfirmOptions } from '../../models/confirm.options.model'

@Injectable({ providedIn: 'root' })
export class ModalService {
  private appRef = inject(ApplicationRef)
  private injector = inject(EnvironmentInjector)

  confirm(options: ConfirmOptions): Promise<boolean> {
    return new Promise(resolve => {
      // Create the component dynamically
      const componentRef = createComponent(ConfirmDialog, {
        environmentInjector: this.injector,
      })

      componentRef.setInput('title', options.title)
      componentRef.setInput('message', options.message)
      componentRef.setInput('confirmText', options.confirmText ?? 'Confirm')
      componentRef.setInput('cancelText', options.cancelText ?? 'Cancel')

      componentRef.instance.confirmed.subscribe(() => {
        resolve(true)
        this.destroy(componentRef, host)
      })
      componentRef.instance.cancelled.subscribe(() => {
        resolve(false)
        this.destroy(componentRef, host)
      })

      this.appRef.attachView(componentRef.hostView)

      const host = document.createElement('div')
      document.body.appendChild(host)
      host.appendChild(componentRef.location.nativeElement)
    })
  }

  private destroy(componentRef: any, host: HTMLElement) {
    this.appRef.detachView(componentRef.hostView)
    componentRef.destroy()
    document.body.removeChild(host)
  }
}



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Modal {}
