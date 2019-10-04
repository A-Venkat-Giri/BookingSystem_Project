import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
// import { BusSearchResultComponent } from './bus-search-result/bus-search-result.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { PrintTicketComponent } from './print-ticket/print-ticket.component';
// import { SelectBusComponent } from './select-bus/select-bus.component';
// // import { SelectSeatComponent } from './select-seat/select-seat.component';
// import { UserFormComponent } from './user-form/user-form.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
// import { AddAvailabilityComponent } from './add-availability/add-availability.component';
// import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
// import { CreateBusComponent } from './create-bus/create-bus.component';
// import { CreateUserComponent } from './create-user/create-user.component';
import { AddBusComponent } from './add-bus/add-bus.component';
// import { DeleteBusComponent } from './delete-bus/delete-bus.component';
// import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetAllTicketComponent } from './get-all-ticket/get-all-ticket.component';
// import { GetBusComponent } from './get-bus/get-bus.component';
// import { GetBusBetweenComponent } from './get-bus-between/get-bus-between.component';
// import { GetTicketComponent } from './get-ticket/get-ticket.component';
// import { GetUserComponent } from './get-user/get-user.component';
// import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
// import { LoginAdminComponent } from './login-admin/login-admin.component';
// import { ShowFeedbackComponent } from './show-feedback/show-feedback.component';
// import { UpdateBusComponent } from './update-bus/update-bus.component';
// import { UpdateUserComponent } from './update-user/update-user.component';
// import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
// import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
// import { GetAllTicketComponent } from './get-all-ticket/get-all-ticket.component';
import { HomeComponent } from './home/home.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { BusBetweenComponent } from './bus-between/bus-between.component';
import { ShowFeedabckComponent } from './show-feedabck/show-feedabck.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    // BusSearchResultComponent,
    // FooterComponent,
    // HeaderComponent,
    // PrintTicketComponent,
    // SelectBusComponent,
    // // SelectSeatComponent,
    // UserFormComponent,
    // BookTicketComponent,
    // AddAvailabilityComponent,
    // CancelTicketComponent,
    CheckAvailabilityComponent,
    // CreateBusComponent,
    // CreateUserComponent,
    AddBusComponent,
    DeleteBusComponent,
    UpdateBusComponent,
    LoginAdminComponent,
    GiveFeedbackComponent,
    CreateUserComponent,
    UpdateuserComponent,
    DeleteUserComponent,
    SearchBusComponent,
    BookTicketComponent,
    CancelTicketComponent,
    GetTicketComponent,
    LoginUserComponent,
    HomeComponent,
    // DeleteBusComponent,
    // DeleteUserComponent,
    GetAllTicketComponent,
    UserComponentComponent,
    // GetBusComponent,
    // GetBusBetweenComponent,
    // GetTicketComponent,
    // GetUserComponent,
    GiveFeedbackComponent,
    AdminComponentComponent,
    BusBetweenComponent,
    ShowFeedabckComponent,
    SelectSeatComponent,
    // LoginAdminComponent,
    // ShowFeedbackComponent,
    // UpdateBusComponent,
    // UpdateUserComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'addbus',component:AddBusComponent},
      {path:'deletebus' ,component:DeleteBusComponent},
      {path:'loginadmin' ,component:LoginAdminComponent},
      {path:'updatebus' ,component:UpdateBusComponent},
      {path:'createuser' ,component:CreateUserComponent},
      {path:'deleteuser' ,component:DeleteUserComponent},
      {path:'updateuser' ,component:UpdateuserComponent},
      {path:'feedback' ,component:GiveFeedbackComponent},
      {path:'loginuser' ,component:LoginUserComponent},
      {path:'searchbus',component:SearchBusComponent},
      {path:'getticket',component:GetTicketComponent},
      {path:'getallticket',component:GetAllTicketComponent},
      {path:'checkavailablity',component:CheckAvailabilityComponent},
      {path:'bookticket',component:BookTicketComponent},
      {path:'givefeedback',component:GiveFeedbackComponent},
      {path:'cancelticket',component:CancelTicketComponent},
      {path:'userfunctions',component:UserComponentComponent},
      {path:'busbetween',component:BusBetweenComponent},
      {path:'showfeedback',component:ShowFeedabckComponent},
      {path:'admin',component:AdminComponentComponent},
      {path:'selectseat',component:SelectSeatComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
