import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutShellComponent } from './components/layout-shell/layout-shell.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [LayoutShellComponent, SidebarComponent, ToolbarComponent],
  imports: [SharedModule],
  exports: [LayoutShellComponent]
})
export class LayoutModule {}
