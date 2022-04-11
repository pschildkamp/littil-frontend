import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalController } from './modal.controller';

@NgModule({
  imports: [MatDialogModule],
  providers: [],
})
export class ModalControllerModule {
  static forRoot(): ModuleWithProviders<ModalControllerModule> {
    return {
      ngModule: ModalControllerModule,
      providers: [MatDialog, ModalController],
    };
  }
}
