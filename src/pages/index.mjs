import * as React from "react"
import { Link } from "gatsby"


const IndexPage = () => {
  return (
    <main>
      <h2 >
        Assignment Approach
        </h2>

        <ul>
<li><b>Understanding Customer Issue:</b> The customer reported issues with renamimg a PHP application. I identified the need for clear installation documentation to assist customers facing similar challenges. 

To get into the customer's shoe, I installed a basic node.js  application.</li>


<li><b>Identifying Key Information:</b> I extracted relevant details from the ticket conversation, focusing on installation steps, prerequisites, and additional resources for troubleshooting.</li>


<li><b>Structured Documentation:</b> I structured the documentation into clear sections, including prerequisites, installation steps, and additional resources. I used MDX and Gatsby to adhere with New Relic's existing documentation format. However, I didn't add any styling to the content.</li>


<li><b>Adding relevant New Relic documentation links :</b> I added  hyper-links to New Relic's official documentation for configuration and customization to ensure accurate monitoring.</li>




<li><b>My questions for SME:</b> In addition to getting the technical review done from the SME, I would also like to know other process of renaming an application (for example by using REST or NRQL APIs) and ensure that we don't miss any critical information. </li>
  

</ul>
        <p>Click the following link to view the installation procedure:</p>
    <div>
      <Link to="/assignment1/">Installation procedure for New Relic PHP agent.</Link>
    </div>

      
     
    </main>
  )
}

export default IndexPage

export const Head = () => <title>New Relic Assignement</title>
