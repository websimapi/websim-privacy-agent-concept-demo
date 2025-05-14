document.addEventListener('DOMContentLoaded', function() {
    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // iframe demo logs
    const iframeLog = document.getElementById('iframe-log');
    const mockWebsite = document.getElementById('mock-website');
    
    function logMessage(logElement, message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        const logItem = document.createElement('div');
        logItem.className = `log-item ${type}`;
        logItem.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${message}`;
        logElement.appendChild(logItem);
        logElement.scrollTop = logElement.scrollHeight;
    }
    
    // iframe demo interaction logic
    document.getElementById('load-site').addEventListener('click', function() {
        const url = document.getElementById('iframe-url').value;
        logMessage(iframeLog, `Attempting to load: ${url}`, 'action');
        setTimeout(() => {
            logMessage(iframeLog, 'Site loaded in iframe (simulated)', 'success');
            logMessage(iframeLog, 'WARNING: Same-origin policy would prevent most interactions with real sites', 'error');
        }, 1000);
    });
    
    document.getElementById('scan-site').addEventListener('click', function() {
        logMessage(iframeLog, 'AI Agent scanning site content...', 'action');
        
        setTimeout(() => {
            logMessage(iframeLog, 'Using LLM to analyze visible content', 'info');
            
            // Simulate LLM analysis
            setTimeout(() => {
                logMessage(iframeLog, 'Found potential privacy link in navigation', 'success');
                // Highlight the privacy link
                const privacyLink = document.querySelector('.privacy-link');
                privacyLink.style.backgroundColor = 'yellow';
                privacyLink.style.padding = '2px 5px';
            }, 1500);
        }, 1000);
    });
    
    document.getElementById('submit-request').addEventListener('click', function() {
        logMessage(iframeLog, 'Attempting to navigate to privacy page...', 'action');
        
        setTimeout(() => {
            // Update mock website to show privacy page
            mockWebsite.innerHTML = `
                <h3>Privacy Settings</h3>
                <p>Manage your privacy settings and request data deletion.</p>
                <div class="mock-form">
                    <div class="form-group">
                        <label for="name">Full Name:</label>
                        <input type="text" id="name" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="request">Request Type:</label>
                        <select id="request">
                            <option value="delete">Delete My Data</option>
                            <option value="access">Access My Data</option>
                            <option value="correct">Correct My Data</option>
                        </select>
                    </div>
                    <button class="submit-btn">Submit Request</button>
                </div>
            `;
            
            logMessage(iframeLog, 'Privacy page loaded', 'success');
            logMessage(iframeLog, 'Analyzing form structure...', 'action');
            
            setTimeout(() => {
                logMessage(iframeLog, 'ERROR: Cannot access form elements due to same-origin policy', 'error');
                logMessage(iframeLog, 'In a real implementation, this would fail for most websites', 'error');
                logMessage(iframeLog, 'This is why the iframe approach has low feasibility (15/100)', 'info');
            }, 1500);
        }, 1000);
    });
    
    // Node.js demo logs
    const nodejsLog = document.getElementById('nodejs-log');
    
    document.getElementById('nodejs-scan').addEventListener('click', function() {
        const url = document.getElementById('nodejs-url').value;
        logMessage(nodejsLog, `Launching headless browser and navigating to: ${url}`, 'action');
        
        setTimeout(() => {
            logMessage(nodejsLog, 'Browser launched successfully', 'success');
            logMessage(nodejsLog, 'Taking screenshot of homepage for analysis', 'info');
            logMessage(nodejsLog, 'Sending screenshot to WebSim LLM API for analysis', 'action');
            
            setTimeout(() => {
                logMessage(nodejsLog, 'LLM Response: "I can see multiple navigation links. The privacy policy link appears in the footer section."', 'success');
                logMessage(nodejsLog, 'Navigating to privacy policy page', 'action');
            }, 1500);
        }, 1000);
    });
    
    document.getElementById('nodejs-analyze').addEventListener('click', function() {
        logMessage(nodejsLog, 'Scanning privacy page for data deletion options...', 'action');
        
        setTimeout(() => {
            logMessage(nodejsLog, 'Taking screenshot of privacy page', 'info');
            logMessage(nodejsLog, 'Sending to WebSim LLM: "Locate data deletion request section or form"', 'action');
            
            setTimeout(() => {
                logMessage(nodejsLog, 'LLM Response: "Found data subject request form with fields for: name, email, user ID, request type"', 'success');
                logMessage(nodejsLog, 'Analyzing form structure and required fields', 'action');
                logMessage(nodejsLog, 'Planning form submission strategy', 'info');
            }, 2000);
        }, 1000);
    });
    
    document.getElementById('nodejs-submit').addEventListener('click', function() {
        logMessage(nodejsLog, 'Preparing to fill out data deletion request form', 'action');
        
        setTimeout(() => {
            logMessage(nodejsLog, 'Filling form fields with user information:', 'info');
            logMessage(nodejsLog, '- Name: John Doe', 'info');
            logMessage(nodejsLog, '- Email: john@example.com', 'info');
            logMessage(nodejsLog, '- Request Type: Data Deletion', 'info');
            
            setTimeout(() => {
                logMessage(nodejsLog, 'CAPTCHA detected on form', 'warning');
                logMessage(nodejsLog, 'Sending CAPTCHA image to WebSim for analysis', 'action');
                
                setTimeout(() => {
                    logMessage(nodejsLog, 'Unable to solve CAPTCHA automatically', 'error');
                    logMessage(nodejsLog, 'Options: 1) Request human verification, 2) Skip this site', 'info');
                    logMessage(nodejsLog, 'This illustrates a common limitation of fully automated approaches', 'warning');
                }, 1500);
            }, 2000);
        }, 1000);
    });
    
    // Initial logs
    logMessage(iframeLog, 'AI Privacy Agent initialized', 'info');
    logMessage(iframeLog, 'Ready to demonstrate iframe approach limitations', 'info');
    
    logMessage(nodejsLog, 'Node.js Privacy Agent concept initialized', 'info');
    logMessage(nodejsLog, 'This demonstrates how a desktop app could work with WebSim LLM', 'info');
});

