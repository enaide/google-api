import { NgModule } from '@angular/core';

import { TruncatePipe } from './truncate.pipe';

export const PIPES = [TruncatePipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
