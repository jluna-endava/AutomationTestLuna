
const homePage = require("../page_objects/homePage");
const loginPage = require("../page_objects/loginPage");

context('Test Suit',() =>{
    it("home page loads properly", ()=>{
        homePage.visit();
        homePage.verifyHomePageLoads();
    })

    it("login failed - user doesn't exist",()=>{
        loginPage.visit();
        cy.fixture("loginTSData").then((data)=>{
            loginPage.loginUser(data.tc1_loginerror.email,data.tc1_loginerror.password);
        })
        loginPage.verifyLoginErrorMessage();
    })

    it("login success - user login", ()=>{
        loginPage.visit();
        cy.fixture("loginTSData").then((data)=>{
            cy.intercept(data.tc2_loginsuccessful.method,data.tc2_loginsuccessful.endpoint).as("afterLogin");
            loginPage.loginUser(data.tc2_loginsuccessful.email,data.tc2_loginsuccessful.password);
            cy.wait("@afterLogin").its("response.statusCode").should("eq",200);
        })
        loginPage.verifyAccountLogin();
    })

    it("login failed - user gets blocked", ()=>{
        loginPage.visit();
        cy.fixture("loginTSData").then((data)=>{
            loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password);
            loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password);
            loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password);
            loginPage.loginUser(data.tc3_loginerror.email,data.tc3_loginerror.password);
        })
        loginPage.verifyBlockedLoginErrorMessage();
    })
})