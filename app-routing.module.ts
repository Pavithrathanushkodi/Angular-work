import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariableComponent } from './variable/variable.component';
import { NgifComponent } from './ngif/ngif.component';
import { ForComponent } from './for/for.component';
import { ClassComponent } from './class/class.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductdetailsinfoComponent } from './productdetailsinfo/productdetailsinfo.component';
import { NgtaskComponent } from './ngtask/ngtask.component';
import { ChildComponent } from './child/child.component';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductComponent } from './product/product.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [{ path: 'variable', component:VariableComponent  },
{ path: 'ngif', component:NgifComponent },
{ path: 'for', component:ForComponent }, 
{ path: 'class', component:ClassComponent},
{ path: 'blog', component:BlogComponent},
{ path: 'blogdetails/:title', component:BlogdetailComponent},
{ path: 'productdetails', component:ProductdetailsComponent},
{ path: 'productdetailsinfo/:category/:price', component:ProductdetailsinfoComponent},
{ path: 'ngtask', component:NgtaskComponent},
{ path: 'child', component:ChildComponent},
{ path: 'inputoutput', component:InputoutputComponent},
{ path: 'productcard', component:ProductcardComponent},
{ path: 'product', component:ProductComponent},
{path: 'new', component:NewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
