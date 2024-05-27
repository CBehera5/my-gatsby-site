import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <div>
      <h2>Assignment Approach</h2>

      <ul>
        <li>
          <b>Understanding Customer Issue:</b> A customer reported an issue when the user could not find his application in New Relic dashboard and could not monitor the performance of the application. I identified the need for clear installation documentation to assist customers facing similar challenges. To empathize with the customer's situation, I installed a Node.js APM agent and added it to New Relic dashboard.
        </li>

        <li>
          <b>Identifying Key Information:</b> I extracted relevant details from the ticket conversation, focusing on installation steps, prerequisites, and additional resources for troubleshooting.
        </li>

        <li>
          <b>Structured Documentation:</b> I structured the documentation into clear sections, including prerequisites, installation steps, and additional resources. I used MDX and Gatsby to adhere to New Relic's existing documentation format. However, I didn't add any styling to the content.
        </li>

        <li>
          <b>Adding Existing New Relic Documentation Links:</b> I added hyperlinks to New Relic's official documentation for configuration and customization to ensure accurate monitoring.
        </li>

        <li>
          <b>Questions for SME:</b> In addition to getting the technical review done from the SME, I would also like to know other methods of renaming an application (for example, by using REST or NRQL APIs) and ensure that we don't miss any critical information.
        </li>
      </ul>

      </div>


      <h2>Assignment</h2>
      
      <div>
        <Link to="/assignment1/">Installation procedure for the New Relic PHP agent.</Link>
      </div>


      <div>
  <h2>Portfolio Samples</h2>

  <ol>
    <li>
      <b>Nutanix Calm Documentation:</b> 
      <p>Being an individual contributor, I designed and developed comprehensive documentation for Nutanix Calm, focusing on the integration of automation and orchestration tools. This included user guides, API references, and step-by-step tutorials to help users deploy and manage applications efficiently.</p>
      <a href="https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Calm-Admin-Operations-Guide-v3_6_0:Introduction" target="_blank">View Documentation</a>
    </li>
    <li>
      <b>Rapyuta Robotics:</b> 
      <p>I was the only technical writer and I successfully created detailed technical content for Rapyuta Robotics, covering various aspects of their robotics platform. This involved writing clear and concise manuals, quick-start guides, and troubleshooting documentation to assist users in setting up and operating robotic systems.</p>
      <a href="https://userdocs.rapyuta.io/" target="_blank">View Documentation</a>
    </li>
  </ol>
</div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>New Relic Assignment</title>
