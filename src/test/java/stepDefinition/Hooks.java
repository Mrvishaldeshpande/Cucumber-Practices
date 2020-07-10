package stepDefinition;



import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void beforemethod() {
		//System.out.println();System.out.println();System.out.println();System.out.println();System.out.println();
		System.out.println("Setup of webdriver");
		
		System.out.println();System.out.println();System.out.println();System.out.println();
	}
	
	
	@After
	public void aftermethod() {
		System.out.println();System.out.println();
		System.out.println("Teardown method");
		System.out.println();System.out.println();System.out.println();System.out.println();System.out.println();
	}
}
