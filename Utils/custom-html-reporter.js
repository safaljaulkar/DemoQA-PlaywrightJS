const fs = require('fs');
const path = require('path');

//-----------------TEST REPORT FILE--------------
function getReportFileName() {

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `Test_Report_${day}-${month}-${year}_${hours}-${minutes}-${seconds}_${ampm}.html`;  //folder name 
}

class CustomHTMLReporter {

    onBegin(config, suite) {
        console.log(`Starting tests: ${suite.allTests().length}`);
        this.reportContent = `<html><head><title>Test Report</title></head><body>`;
        this.reportContent += `<h1>Playwright Test Report</h1>`;
    }

    async onTestEnd(test, result) {

        this.reportContent += `
            <div style="margin-bottom:10px;">
                <strong>${test.title}</strong> - 
                <span style="color:${result.status === 'passed' ? 'green' : 'red'};">
                    ${result.status.toUpperCase()}
                </span>
            </div>
        `;

        //--------------Capture screenshot for failed tests---------------------
        if (result.status === 'failed') {

            const screenshotDir = path.join(process.cwd(), "reports", "screenshots");
            if (!fs.existsSync(screenshotDir))
                fs.mkdirSync(screenshotDir, { recursive: true });

            for (const r of result.attachments || []) {
                if (r.name === 'screenshot' && r.path) {

                    // Get current date/time
                    const date = new Date();
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, "0");
                    const day = String(date.getDate()).padStart(2, "0");

                    let hours = date.getHours();
                    const minutes = String(date.getMinutes()).padStart(2, "0");
                    const seconds = String(date.getSeconds()).padStart(2, "0");
                    const ampm = hours >= 12 ? "PM" : "AM";
                    hours = hours % 12 || 12;

                    // Create timestamp text
                    const timestamp = `${day}-${month}-${year}_${hours}:${minutes}:${seconds}_${ampm}`;

                    // Test file name
                    const testName = test.title.replace(/[^a-zA-Z0-9]/g, "_");

                    // Final screenshot name
                    const screenshotName = `${testName}_${timestamp}.png`;

                    // Destination path
                    const destPath = path.join(screenshotDir, screenshotName);

                    // Copy screenshot
                    fs.copyFileSync(r.path, destPath);

                    // Add screenshot to HTML
                    this.reportContent += `
      <img src="screenshots/${screenshotName}" 
           style="max-width:400px; border:1px solid black; margin-top:5px;">
    `;
                }
            }
        }
    }

    onEnd(result) {

        this.reportContent += `<h3>Overall Result: ${result.status}</h3>`;
        this.reportContent += `</body></html>`;

        const reportName = getReportFileName();
        const reportDir = path.join(process.cwd(), "reports");

        if (!fs.existsSync(reportDir))
            fs.mkdirSync(reportDir);

        fs.writeFileSync(path.join(reportDir, reportName), this.reportContent);

        console.log(`\nCustom HTML report generated: reports/${reportName}`);
    }
}

module.exports = CustomHTMLReporter;