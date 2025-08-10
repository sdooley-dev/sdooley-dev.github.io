package pageobjects;

import java.io.File;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.provar.core.testapi.ITestExecutionContext;
import com.provar.core.testapi.annotations.*;

@Page(connection = "Admin")

public class POHelpDeskKnowledgeCenter {

	@TestExecutionContext
	public ITestExecutionContext testExecutionContext;

	WebDriver driver;

	public POHelpDeskKnowledgeCenter(WebDriver driver) {
		this.driver = driver;
	}


	/*
	 * this is in case Announcements Modal interferes
	 * 
	 * @ButtonType()
	 * 
	 * @FindBy(xpath = "//form//button[normalize-space(.)='Close']") public
	 * WebElement closeAnnouncementsModal;


	@LinkType()
	@FindBy(xpath = "")
	public WebElement ;

	*/
	
/*
	@LinkType()
	@FindBy(xpath = "//p[@class='lwc-4rt99a8doqk override-text-style slds-truncate textBlock_desktopTabletMobile dxp-active-tab-text-style']")
	public WebElement subtabKnowledgeCenter;
	
	@LinkType()
	@FindBy(xpath = "//p[@class='lwc-4rt99a8doqk override-text-style slds-truncate textBlock_desktopTabletMobile dxp-active-tab-text-style']")
	public WebElement subtabHelpCenter;
*/

	@TextType()
	@FindBy(xpath = "//li[1]//dxp_base-text-block/p")
	public WebElement MenuKnowledgeCenter;


	@TextType()
	@FindBy(xpath = "//li[2]//dxp_base-text-block/p")
	public WebElement subtabHelpCenter11;

	@TextType()
	@FindBy(xpath = "//li[3]//dxp_base-text-block/p")
	public WebElement subtabMyIssues;

	@TextType()
	@FindBy(xpath = "//h2[normalize-space(.)='Help Center']")
	public WebElement KCItemHelpCenter;

	@TextType()
	@FindBy(xpath = "//span[normalize-space(.)='Helpful Links']")
	public WebElement KCItemHelpfulLinks;

	@TextType()
	@FindBy(xpath = "//span[normalize-space(.)='General']")
	public WebElement KCItemGeneral;

	@TextType()
	@FindBy(xpath = "//span[normalize-space(.)='Homeless']")
	public WebElement KCItemHomeless;

	@TextType()
	@FindBy(xpath = "//span[normalize-space(.)='Legal Services for Veterans']")
	public WebElement KCItemLegalServicesForVeterans;

	@TextType()
	@FindBy(xpath = "//span[normalize-space(.)='Suicide Prevention']")
	public WebElement KCItemSuicidePrevention;
	
	@TextType()
	@FindBy(xpath = "//body")
	public WebElement JVStepCheck;

	@TextType()
	@FindBy(xpath = "//lightning-accordion-section[1]//p[1]/lightning-formatted-text")
	public WebElement KCGeneralIdMe;

	@TextType()
	@FindBy(xpath = "//a[normalize-space(.)='Reset Password']")
	public WebElement KCGeneralResetPassword;
	
	/*
	@LinkType()
	@FindBy(xpath = "//a[contains(@href, 'help.id.me/hc/en-us/sections/7298020863511')]")
	public WebElement KCGeneralResetPasswordLink;
*/
	
	@TextType()
	// @FindBy(xpath = "//a[contains(@href, 'https://help.id.me/hc/en-us/sections/7298020863511-Sign-in-and-passwords')]")
	@FindBy(xpath = "//a[@href='https://help.id.me/hc/en-us/sections/7298020863511-Sign-in-and-passwords']")
	public WebElement KCGeneralResetPasswordLink2;
	
	@TextType()
	@FindBy(xpath = "//a[normalize-space(.)='Update Phone Number']")
	public WebElement KCGeneralUpdatePhoneNumber;
	
	@TextType()
	@FindBy(xpath = "//a[@href='https://help.id.me/hc/en-us/articles/7406162717463-How-to-fix-multi-factor-authentication-errors']")
	public WebElement KCGeneralUpdatePhoneNumberLink;
	
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Update Email Address']")
public WebElement KCGeneralUpdateEmailAddress;

@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Update_IDme_email.pdf']")
public WebElement KCGeneralUpdateEmailAddressLink;

@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Two ID.Me Accounts (Note: Please make your business email your primary email)']")
public WebElement KCGeneralTwoIDMe;

@TextType()
@FindBy(xpath = "//a[@href='https://help.id.me/hc/en-us/articles/1500002444141-I-have-a-duplicate-account']")
public WebElement KCGeneralTwoIDMeLink;

// Entry 1: Create ID.Me Account
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Create ID.Me Account']")
public WebElement KCGeneralCreateIDMe;

@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Create_an_IDme_account.pdf']")
public WebElement KCGeneralCreateIDMeLink;

@TextType()
// @FindBy(xpath = "//a[normalize-space(.)='Application Instructions']")
// @FindBy(xpath = "//p[normalize-space(.)='Application Instructions']")
// @FindBy(xpath = "//lightning-formatted-text[@aria-label='ID.Me Guidance']")
// @FindBy(xpath = "//div[@id='lgt-accordion-section-125']//lightning-formatted-text[@aria-label='Application Instructions'][normalize-space()='Application Instructions']")
@FindBy(xpath = "(//lightning-formatted-text[@aria-label='Application Instructions'][normalize-space()='Application Instructions'])[1]")
public WebElement KCGeneralApplicationInstructions;


// Entry 3: Clear Cache
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Clear Cache']")
public WebElement KCGeneralClearCache;

@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Clear_Cache.pdf']")
public WebElement KCGeneralClearCacheLink;

// Entry 4: Organization Enrollment
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Organization Enrollment']")
public WebElement KCGeneralOrganizationEnrollment;

@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_Organization_and_Program_Managers_Guide.pdf']")
public WebElement KCGeneralOrganizationEnrollmentLink;

// Entry 5: Program Manager Guide
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Program Manager Guide']")
public WebElement KCGeneralProgramManagerGuide;

@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Program_Manager_Manage_Access.pdf']")
public WebElement KCGeneralProgramManagerGuideLink;

// Entry 6: Submit a Public Help Desk Ticket
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Submit a Public Help Desk Ticket']")
public WebElement KCGeneralSubmitPublicHelpDeskTicket;

@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Submit_a_Public_Help_Desk_Ticket.pdf']")
public WebElement KCGeneralSubmitPublicHelpDeskTicketLink;


// 20 | label | KC HL Background Information
@TextType()
// @FindBy(xpath = "//a[normalize-space(.)='Background Information']")
@FindBy(xpath = "(//lightning-formatted-text[@aria-label='Background Information'][normalize-space()='Background Information'])[1]")
public WebElement KCHLBackgroundInformation;

// 21 | label | KC HL Overview Video
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Overview Video']")
public WebElement KCHLOverviewVideo;

// 22 | link | KC HL Overview Video Link
@TextType()
@FindBy(xpath = "//a[@href='https://www.youtube.com/watch?v=KTDw4Lh7Kso']")
public WebElement KCHLOverviewVideoLink;

// 23 | label | KC HL FAQs
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='FAQs']")
public WebElement KCHLFaqs;

// 24 | link | KC HL FAQs Link
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES_FAQS.pdf']")
public WebElement KCHLFaqsLink;

// 25 | label | KC HL Homeless Website
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Homeless Website']")
public WebElement KCHLHomelessWebsite;

// 26 | link | KC HL Homeless Website Link
@TextType()
@FindBy(xpath = "//a[@href='http://www.va.gov/homeless/squares']")
public WebElement KCHLHomelessWebsiteLink;

// 27 | label | KC HL Homeless Programs Office
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Homeless Programs Office']")
public WebElement KCHLHomelessProgramsOffice;

// 28 | link | KC HL Homeless Programs Office Link
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/homeless/']")
public WebElement KCHLHomelessProgramsOfficeLink;


// 29 | assertSubheader | KCHLEligibilityResources210
@TextType()
// @FindBy(xpath = "(//lightning-formatted-text[@aria-label='Eligibility Resources'][normalize-space()='Eligibility Resources'])[1]")
@FindBy(xpath = "(//div//lightning-formatted-text[normalize-space()='Eligibility Resources']")
	  //div[@id='lgt-accordion-section-130']//lightning-formatted-text[@aria-label='Eligibility Resources'][normalize-space()='Eligibility Resources']
public WebElement KCHLEligibilityResources210;


// 30 | assertText | KCHLEligibilityTable215
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Eligibility Table']")
public WebElement KCHLEligibilityTable215;


// 31 | assertLink | KCHLEligibilityTable220
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000008F/q22GVcYBV.hkdN68mV9LsyxQUC9yE4R_PbJmToANtBU']")
public WebElement KCHLEligibilityTable220;


// 32 | assertText | KCHLSSVFProgramGuide225
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='SSVF Program Guide']")
public WebElement KCHLSSVFProgramGuide225;


// 33 | assertLink | KCHLSSVFProgramGuide230
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/ssvf/docs/SSVF_Program_Guide.pdf']")
public WebElement KCHLSSVFProgramGuide230;


// 34 | assertText | KCHLGPDWebsite235
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='GPD Website']")
public WebElement KCHLGPDWebsite235;


// 35 | assertLink | KCHLGPDWebsite240
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/GPD_ProviderWebsite.asp']")
public WebElement KCHLGPDWebsite240;


// 36 | assertText | KCHLHealthEligibilityWebsite245
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Health Eligibility Website']")
public WebElement KCHLHealthEligibilityWebsite245;


// 37 | assertLink | KCHLHealthEligibilityWebsite250
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/health-care/eligibility/']")
public WebElement KCHLHealthEligibilityWebsite250;


// 38 | assertText | KCHLNationalArchivesandRecordsAdministrationNARA255
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='National Archives and Records Administration (NARA)']")
public WebElement KCHLNationalArchivesandRecordsAdministrationNARA255;


// 39 | assertLink | KCHLNationalArchivesandRecordsAdministrationNARA260
@TextType()
@FindBy(xpath = "//a[@href='https://www.archives.gov/veterans']")
public WebElement KCHLNationalArchivesandRecordsAdministrationNARA260;


// 40 | assertText | KCHLDefensePersonnelRecordsInformationRetrievalSystem265
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Defense Personnel Records Information Retrieval System']")
public WebElement KCHLDefensePersonnelRecordsInformationRetrievalSystem265;


// 41 | assertLink | KCHLDefensePersonnelRecordsInformationRetrievalSystem270
@TextType()
@FindBy(xpath = "//a[@href='https://www.dpris.dod.mil/#/home/home-home']")
public WebElement KCHLDefensePersonnelRecordsInformationRetrievalSystem270;


// 42 | assertText | KCHLVeteranStatusVerification275
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Veteran Status Verification']")
public WebElement KCHLVeteranStatusVerification275;


// 43 | assertLink | KCHLVeteranStatusVerification280
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000009X/OQYsFAVqHp0CO1iWMUpaXn5A5iyYlqBoJy8Qm4gbtpk']")
public WebElement KCHLVeteranStatusVerification280;


// 44 | assertText | KCHLVALocator285
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='VA Locator']")
public WebElement KCHLVALocator285;


// 45 | assertLink | KCHLVALocator290
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/find-locations/']")
public WebElement KCHLVALocator290;


// 46 | assertText | KCHLHelpfulResources295
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Helpful Resources']")
public WebElement KCHLHelpfulResources295;


// 47 | assertLink | KCHLHelpfulResources300
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000009S/To7Nu6w2k.1OpHYWp4zQgb46sAexwXk_KEm2X5z34QM']")
public WebElement KCHLHelpfulResources300;


// 48 | assertText | KCHLNARA305
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='NARA']")
public WebElement KCHLNARA305;


// 49 | assertLink | KCHLNARA310
@TextType()
@FindBy(xpath = "//a[@href='https://vetrecs.archives.gov/VeteranRequest/home.html']")
public WebElement KCHLNARA310;


// 50 | assertSubheader | KCHLSearchGuides315
@TextType()
@FindBy(xpath = "(//div//lightning-formatted-text[normalize-space()='Search Guides']")
public WebElement KCHLSearchGuides315;


// 51 | assertText | KCHLSearchToolsVideo320
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Search Tools Video']")
public WebElement KCHLSearchToolsVideo320;


// 52 | assertLink | KCHLSearchToolsVideo325
@TextType()
@FindBy(xpath = "//a[@href='https://www.youtube.com/watch?v=ash2Pnye6zc']")
public WebElement KCHLSearchToolsVideo325;


// 53 | assertText | KCHLSingleSearch330
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Single Search']")
public WebElement KCHLSingleSearch330;


// 54 | assertLink | KCHLSingleSearch335
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000009c/6yM6rLMBD4pTm.Fcto9vBB1OD._9MAw35KfhMUD.r3o']")
public WebElement KCHLSingleSearch335;


// 55 | assertText | KCHLBulkSearchInstructions340
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Bulk Search Instructions']")
public WebElement KCHLBulkSearchInstructions340;


// 56 | assertLink | KCHLBulkSearchInstructions345
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Bulk_Veteran_Search.pdf']")
public WebElement KCHLBulkSearchInstructions345;


// 57 | assertText | KCHLBulkSearchTemplate350
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Bulk Search Template']")
public WebElement KCHLBulkSearchTemplate350;


// 58 | assertLink | KCHLBulkSearchTemplate355
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000007v/13QwGx4GaRLZDLQLM8XcixtD94iohZAEAf9ujdy7TIU']")
public WebElement KCHLBulkSearchTemplate355;


// 59 | assertSubheader | KCHLApplicationInstructions360
@TextType()
@FindBy(xpath = "(//div//lightning-formatted-text[normalize-space()='Application Instructions']")
public WebElement KCHLApplicationInstructions360;


// 60 | assertText | KCHLVAUserGuide365
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='VA User Guide']")
public WebElement KCHLVAUserGuide365;


// 61 | assertLink | KCHLVAUserGuide370
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Internal_VA_Users_Request_and_Access_a_SQUARES_Account.pdf']")
public WebElement KCHLVAUserGuide370;


// 62 | assertText | KCHLExternalStandardUserRegistration375
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='External Standard User Registration']")
public WebElement KCHLExternalStandardUserRegistration375;


// 63 | assertLink | KCHLExternalStandardUserRegistration380
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Non-VA_Standard_User_Registration_and_Access_a_SQUARES_Account.pdf']")
public WebElement KCHLExternalStandardUserRegistration380;


// 64 | assertText | KCHLApprovalHierarchy385
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Approval Hierarchy']")
public WebElement KCHLApprovalHierarchy385;


// 65 | assertLink | KCHLApprovalHierarchy390
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000009h/T24jmuSHiRAXigab0.fteLhyDFfB_cgKKL11AFYZWEg']")
public WebElement KCHLApprovalHierarchy390;


// 66 | assertSubheader | KCHLVideoLibrary395
@TextType()
@FindBy(xpath = "(//div//lightning-formatted-text[normalize-space()='Video Library']")
public WebElement KCHLVideoLibrary395;


// 67 | assertText | KCHLOverviewVideo400
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Overview Video']")
public WebElement KCHLOverviewVideo400;


// 68 | assertLink | KCHLOverviewVideo405
@TextType()
@FindBy(xpath = "//a[@href='https://www.youtube.com/watch?v=KTDw4Lh7Kso']")
public WebElement KCHLOverviewVideo405;


// 69 | assertText | KCHLSearchToolsVideo410
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Search Tools Video']")
public WebElement KCHLSearchToolsVideo410;


// 70 | assertLink | KCHLSearchToolsVideo415
@TextType()
@FindBy(xpath = "//a[@href='https://www.youtube.com/watch?v=ash2Pnye6zc']")
public WebElement KCHLSearchToolsVideo415;


// e71 | click | KCLSLegalServicesforVeterans420
@TextType()
@FindBy(xpath = "//span[normalize-space(.)='Legal Services for Veterans']")
public WebElement KCLSLegalServicesforVeterans420;


// e72 | assertSubheader | KCLSEligibilityResources425
@TextType()
// @FindBy(xpath = "###")
@FindBy(xpath = "(//div//lightning-formatted-text[normalize-space()='Eligibility Resources']")
public WebElement KCLSEligibilityResources425;


// e73 | assertText | KCLSEligibilityTable430
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Eligibility Table']")
public WebElement KCLSEligibilityTable430;


// e74 | assertLink | KCLSEligibilityTable435
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/t0000000Gziw/a/OE000000008j/gsSpssqFYP6RbW52ZCJXeaC1R3xIeNlFlxy_.SNk5bs']")
public WebElement KCLSEligibilityTable435;


// e75 | assertText | KCLSLegalServicesforVeteranWebsite440
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Legal Services for Veteran Website']")
public WebElement KCLSLegalServicesforVeteranWebsite440;


// e76 | assertLink | KCLSLegalServicesforVeteranWebsite445
@TextType()
@FindBy(xpath = "//a[@href='https://www.va.gov/ogc/legalservices.asp']")
public WebElement KCLSLegalServicesforVeteranWebsite445;


// e77 | click | KCSPSuicidePrevention450
@TextType()
@FindBy(xpath = "//span[normalize-space(.)='Suicide Prevention']")
public WebElement KCSPSuicidePrevention450;


// e78 | assertText | KCSPEligibilityTable455
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Eligibility Table']")
public WebElement KCSPEligibilityTable455;


// e79 | assertLink | KCSPEligibilityTable460
@TextType()
@FindBy(xpath = "//a[@href='https://vaemcc.my.salesforce.com/sfc/p/#t0000000Gziw/a/OE000000008A/FzxS5MVHjZ0mt3fCY83tUEDPVxOv1JOjnhTG5RFJm6c']")
public WebElement KCSPEligibilityTable460;


// e80 | assertText | KCSPSuicidePreventionWebsite465
@TextType()
@FindBy(xpath = "//a[normalize-space(.)='Suicide Prevention Website']")
public WebElement KCSPSuicidePreventionWebsite465;


// e81 | assertLink | KCSPSuicidePreventionWebsite470
@TextType()
@FindBy(xpath = "//a[@href='https://www.mentalhealth.va.gov/ssgfox-grants/']")
public WebElement KCSPSuicidePreventionWebsite470;



	
	
/*
Update Phone Number
https://help.id.me/hc/en-us/articles/7406162717463-How-to-fix-multi-factor-authentication-errors 
Update Email Address
https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Update_IDme_email.pdf 
Two ID.Me Accounts (Note: Please make your business email your primary email)
https://help.id.me/hc/en-us/articles/1500002444141-I-have-a-duplicate-account
Create ID.Me Account
https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Create_an_IDme_account.pdf 
Application Instructions
Clear Cache
https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Clear_Cache.pdf
Organization Enrollment
https://www.va.gov/HOMELESS/squares/docs/SQUARES3_Organization_and_Program_Managers_Guide.pdf
Program Manager Guide
https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Program_Manager_Manage_Access.pdf
Submit a Public Help Desk Ticket
https://www.va.gov/HOMELESS/squares/docs/SQUARES3_QRG_Submit_a_Public_Help_Desk_Ticket.pdf
*/
	

	
	
	
	
	


	

} // end
