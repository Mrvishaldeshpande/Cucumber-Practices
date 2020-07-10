package stepDefinition;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class LoginStepDefinition {
	public static String url="www.google.com";
	
	@Given("^user hit \"([^\"]*)\" and land on login page$")
	public void user_hit_and_land_on_login_page(String url)  {
	    System.out.println("user hit ------>"+url);
	}

	@When("^user enter \"([^\\\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_username_and_password(String username, String password)  {
	    
		System.out.println("user enter--> "+ username+" user enter--> "+password);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button()  {
	   System.out.println("User clicking on login button");
	}

	@Then("^user will land on loginhome page$")
	public void user_will_land_on_loginhome_page() {
	    
		System.out.println("User land on login home page");
	}

	@Then("^validate below details$")
	public void validate_below_details(DataTable data)  {
	    
		List<List<String>> obj = data.raw();
		System.out.print(obj.get(1).get(0));System.out.print("  ");
		System.out.println(obj.get(1).get(1));
		System.out.print(obj.get(2).get(0));System.out.print("  ");
		System.out.println(obj.get(2).get(1));
		System.out.print(obj.get(3).get(0));System.out.print("  ");
		System.out.println(obj.get(3).get(1));
		System.out.print(obj.get(4).get(0));System.out.print("  ");
		System.out.println(obj.get(4).get(1));
		
	}


}
