import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { AddPrinterComponent } from './add-printer/add-printer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmptyPagesComponent } from './empty-pages/empty-pages.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { PricingTablesComponent } from './pricing-tables/pricing-tables.component';
import { PrintersComponent } from './printers/printers.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { TagCreateComponent } from './tag-create/tag-create.component';
import { TagDeleteComponent } from './tag-delete/tag-delete.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TermsComponent } from './terms/terms.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PrintEditComponent } from './print-edit/print-edit.component';
import { PrintCreateComponent } from './print-create/print-create.component';
import { PrintRemuveComponent } from './print-remuve/print-remuve.component';
import { SendPrintComponent } from './send-print/send-print.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'about-company',
        component: AboutCompanyComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blog-details',
        component: BlogDetailsComponent
      },
      {
        path: 'edit-etiqueta',
        component: EditProfileComponent
      },
      {
        path: 'edit-impresoras',
        component: AddPrinterComponent
      },
      {
        path: 'empty-page',
        component: EmptyPagesComponent
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'invoice',
        component: InvoiceComponent
      },
      {
        path: 'mail-compose',
        component: MailComposeComponent
      },
      {
        path: 'mail-inbox',
        component: MailInboxComponent
      },
      {
        path: 'pricing-tables',
        component: PricingTablesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      },
      {
        path:'tag-edit/:id',
        component:TagEditComponent
      },
      {
        path:'tag-delete/:id',
        component:TagDeleteComponent
      },
      {
        path:'tag-create',
        component:TagCreateComponent
      },
      {
        path:'printers',
        component:PrintersComponent
      },
      {
        path:'print-edit/:id',
        component:PrintEditComponent
      },
      {
        path:'print-remuve/:id',
        component:PrintRemuveComponent
      },
      {
        path:'print-create',
        component:PrintCreateComponent
      },
      {
        path:'send-print/:id',
        component:SendPrintComponent
      }


    
    
    
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }