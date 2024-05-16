const questions = [
    {
        question: "What is SonarQube primarily used for?",
        options: ["Project Management", "Code Quality Analysis", "Continuous Deployment", "Issue Tracking"],
        answer: 1,
        description: "SonarQube is used for analyzing code quality."
    },
    {
        question: "Which programming languages does SonarQube support?",
        options: ["Java only", "Python only", "Multiple programming languages", "HTML only"],
        answer: 2,
        description: "SonarQube supports multiple programming languages."
    },
    {
        question: "What is a 'code smell' in SonarQube?",
        options: ["A syntax error", "A potential bug", "A software design issue", "A runtime error"],
        answer: 2,
        description: "A code smell is a software design issue."
    },
    {
        question: "Which of the following can SonarQube detect in code?",
        options: ["Bugs", "Vulnerabilities", "Code smells", "All of the above"],
        answer: 3,
        description: "SonarQube can detect bugs, vulnerabilities, and code smells."
    },
    {
        question: "What is a 'Quality Gate' in SonarQube?",
        options: ["A build tool", "A set of conditions a project must meet", "A version control system", "A testing framework"],
        answer: 1,
        description: "A Quality Gate is a set of conditions a project must meet."
    },
    {
        question: "Which database is commonly used with SonarQube?",
        options: ["MySQL", "PostgreSQL", "Oracle", "All of the above"],
        answer: 3,
        description: "SonarQube can use MySQL, PostgreSQL, Oracle, and more."
    },
    {
        question: "What is the purpose of SonarQube plugins?",
        options: ["To add support for new languages", "To enhance core functionality", "To integrate with other tools", "All of the above"],
        answer: 3,
        description: "SonarQube plugins can add language support, enhance functionality, and integrate with other tools."
    },
    {
        question: "In SonarQube, what is a 'project'?",
        options: ["A collection of repositories", "A single repository or codebase", "A series of test cases", "A documentation file"],
        answer: 1,
        description: "A project is a single repository or codebase in SonarQube."
    },
    {
        question: "What does the 'Technical Debt' metric represent in SonarQube?",
        options: ["Total number of lines of code", "Effort to fix code issues", "Number of bugs found", "Code execution time"],
        answer: 1,
        description: "Technical Debt represents the effort to fix code issues."
    },
    {
        question: "Which analysis methods does SonarQube use?",
        options: ["Static code analysis", "Dynamic code analysis", "Both static and dynamic code analysis", "Manual code review"],
        answer: 0,
        description: "SonarQube primarily uses static code analysis."
    },
    {
        question: "How often can SonarQube scans be scheduled?",
        options: ["Daily", "Weekly", "On every commit", "All of the above"],
        answer: 3,
        description: "SonarQube scans can be scheduled daily, weekly, on every commit, and more."
    },
    {
        question: "What is the purpose of the 'Issues' tab in SonarQube?",
        options: ["To report on test coverage", "To list bugs, vulnerabilities, and code smells", "To manage user permissions", "To configure project settings"],
        answer: 1,
        description: "The 'Issues' tab lists bugs, vulnerabilities, and code smells."
    },
    {
        question: "Which feature of SonarQube helps to track code changes over time?",
        options: ["Code Duplication", "Code Coverage", "History", "Security Hotspots"],
        answer: 2,
        description: "The 'History' feature tracks code changes over time."
    },
    {
        question: "What is 'Code Coverage' in SonarQube?",
        options: ["Percentage of code tested by unit tests", "Percentage of code documented", "Number of code lines reviewed", "Number of issues found"],
        answer: 0,
        description: "Code Coverage is the percentage of code tested by unit tests."
    },
    {
        question: "SonarQube's 'Rules' define what?",
        options: ["Coding standards and best practices", "User roles and permissions", "Database schema", "Network configurations"],
        answer: 0,
        description: "Rules in SonarQube define coding standards and best practices."
    },
    {
        question: "What is 'Leak Period' in SonarQube?",
        options: ["The period during which new code is evaluated", "The period during which old code is ignored", "The period during which no analysis is performed", "The period during which only security issues are checked"],
        answer: 0,
        description: "Leak Period is the time during which new code is evaluated."
    },
    {
        question: "Can SonarQube be integrated with CI/CD tools?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can be integrated with CI/CD tools."
    },
    {
        question: "Which role in SonarQube allows a user to administer a specific project?",
        options: ["Code Reviewer", "Quality Gate Administrator", "Project Administrator", "System Administrator"],
        answer: 2,
        description: "A Project Administrator can administer a specific project."
    },
    {
        question: "What type of report does SonarQube generate to show code quality?",
        options: ["Test Report", "Quality Report", "Financial Report", "Log Report"],
        answer: 1,
        description: "SonarQube generates a Quality Report to show code quality."
    },
    {
        question: "How does SonarQube handle duplicated code?",
        options: ["Marks it as a code smell", "Ignores it", "Deletes it automatically", "Refactors it automatically"],
        answer: 0,
        description: "SonarQube marks duplicated code as a code smell."
    },
    {
        question: "Which SonarQube feature helps identify critical security flaws in code?",
        options: ["Code Duplication", "Vulnerability Detection", "Code Review", "Code Formatting"],
        answer: 1,
        description: "Vulnerability Detection helps identify critical security flaws."
    },
    {
        question: "What does the 'SonarQube Scanner' do?",
        options: ["Runs static analysis on code", "Compiles the code", "Runs the code in a production environment", "Sends code to version control"],
        answer: 0,
        description: "The SonarQube Scanner runs static analysis on code."
    },
    {
        question: "What is the 'SonarWay' profile in SonarQube?",
        options: ["A user-defined rule set", "A default quality profile", "A deprecated feature", "A project template"],
        answer: 1,
        description: "The 'SonarWay' profile is a default quality profile."
    },
    {
        question: "What does 'Technical Debt Ratio' represent in SonarQube?",
        options: ["Ratio of technical debt to code volume", "Ratio of tested to untested code", "Ratio of bugs to code volume", "Ratio of new to old code"],
        answer: 0,
        description: "Technical Debt Ratio represents the ratio of technical debt to code volume."
    },
    {
        question: "How can developers receive feedback from SonarQube?",
        options: ["Via email notifications", "Through SonarQube dashboard", "Through IDE integration", "All of the above"],
        answer: 3,
        description: "Developers can receive feedback via email, dashboard, and IDE integration."
    },
    {
        question: "Can SonarQube be used to analyze branch-specific code?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can analyze branch-specific code."
    },
    {
        question: "What is the benefit of 'Pull Request Decoration' in SonarQube?",
        options: ["Provides inline feedback on code changes", "Automatically merges pull requests", "Generates test cases", "Formats code"],
        answer: 0,
        description: "Pull Request Decoration provides inline feedback on code changes."
    },
    {
        question: "Which of the following is not a SonarQube metric?",
        options: ["Reliability Rating", "Security Rating", "Maintainability Rating", "Execution Speed"],
        answer: 3,
        description: "Execution Speed is not a SonarQube metric."
    },
    {
        question: "What does SonarQube use to define coding rules?",
        options: ["Quality Profiles", "Quality Gates", "Issue Filters", "Code Templates"],
        answer: 0,
        description: "SonarQube uses Quality Profiles to define coding rules."
    },
    {
        question: "What is a 'Quality Profile' in SonarQube?",
        options: ["A set of rules for code analysis", "A user role", "A type of project report", "A version control branch"],
        answer: 0,
        description: "A Quality Profile is a set of rules for code analysis."
    },
    {
        question: "Which of the following is a metric tracked by SonarQube?",
        options: ["Cyclomatic Complexity", "Compilation Time", "Execution Speed", "Memory Usage"],
        answer: 0,
        description: "Cyclomatic Complexity is a metric tracked by SonarQube."
    },
    {
        question: "Can SonarQube be extended with custom plugins?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can be extended with custom plugins."
    },
    {
        question: "What is the 'Administer System' permission in SonarQube?",
        options: ["Allows creating new projects", "Allows full control over the SonarQube instance", "Allows running code analysis", "Allows viewing project dashboards"],
        answer: 1,
        description: "The 'Administer System' permission allows full control over the SonarQube instance."
    },
    {
        question: "What is the purpose of 'SonarLint'?",
        options: ["Live code quality feedback in the IDE", "To automate deployments", "To manage code repositories", "To run integration tests"],
        answer: 0,
        description: "SonarLint provides live code quality feedback in the IDE."
    },
    {
        question: "Which SonarQube feature is used to ensure new code meets quality standards?",
        options: ["Quality Profiles", "Quality Gates", "Project Settings", "Code Duplication"],
        answer: 1,
        description: "Quality Gates ensure new code meets quality standards."
    },
    {
        question: "What does 'Reliability Rating' in SonarQube measure?",
        options: ["Likelihood of code to have bugs", "Code execution speed", "Code documentation level", "Ease of code maintenance"],
        answer: 0,
        description: "Reliability Rating measures the likelihood of code to have bugs."
    },
    {
        question: "Can SonarQube analyze infrastructure as code (IaC)?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can analyze infrastructure as code (IaC)."
    },
    {
        question: "What type of feedback does SonarQube provide during code review?",
        options: ["Real-time", "Post-deployment", "At scheduled intervals", "On-demand"],
        answer: 0,
        description: "SonarQube provides real-time feedback during code review."
    },
    {
        question: "What is the function of the 'Dashboard' in SonarQube?",
        options: ["To compile code", "To provide an overview of code quality metrics", "To manage database connections", "To configure user roles"],
        answer: 1,
        description: "The 'Dashboard' provides an overview of code quality metrics."
    },
    {
        question: "Can SonarQube integrate with GitHub?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can integrate with GitHub."
    },
    {
        question: "Which component stores SonarQube data?",
        options: ["SonarQube Scanner", "SonarQube Database", "SonarQube Server", "SonarQube Plugin"],
        answer: 1,
        description: "The SonarQube Database stores SonarQube data."
    },
    {
        question: "What type of feedback loop does SonarQube create for developers?",
        options: ["Slow feedback loop", "Manual feedback loop", "Continuous feedback loop", "Delayed feedback loop"],
        answer: 2,
        description: "SonarQube creates a continuous feedback loop for developers."
    },
    {
        question: "What is the 'Portfolio' feature in SonarQube?",
        options: ["A collection of related projects", "A set of user roles", "A database configuration", "A CI/CD pipeline"],
        answer: 0,
        description: "The 'Portfolio' feature is a collection of related projects."
    },
    {
        question: "Can SonarQube be used for mobile app code analysis?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can be used for mobile app code analysis."
    },
    {
        question: "What does the 'New Code' period refer to in SonarQube?",
        options: ["Recently added or modified code", "Code from the last major release", "Code that hasn't been reviewed yet", "Code older than one year"],
        answer: 0,
        description: "The 'New Code' period refers to recently added or modified code."
    },
    {
        question: "What is a 'Security Hotspot' in SonarQube?",
        options: ["A location in code with potential security risks", "A syntax error", "A performance issue", "A code formatting problem"],
        answer: 0,
        description: "A 'Security Hotspot' is a location in code with potential security risks."
    },
    {
        question: "What is 'SonarCloud'?",
        options: ["A cloud-hosted version of SonarQube", "A cloud storage service", "A cloud-based development environment", "A cloud-based CI/CD tool"],
        answer: 0,
        description: "SonarCloud is a cloud-hosted version of SonarQube."
    },
    {
        question: "Can SonarQube be customized with additional rules?",
        options: ["Yes", "No"],
        answer: 0,
        description: "SonarQube can be customized with additional rules."
    },
    {
        question: "Which metric indicates the amount of code duplication in SonarQube?",
        options: ["Duplication Percentage", "Code Coverage", "Technical Debt", "Reliability Rating"],
        answer: 0,
        description: "Duplication Percentage indicates the amount of code duplication."
    },
    {
        question: "What is the benefit of using SonarQube for security analysis?",
        options: ["Improved code formatting", "Detection of potential vulnerabilities", "Faster code compilation", "Enhanced UI design"],
        answer: 1,
        description: "The benefit of using SonarQube for security analysis is the detection of potential vulnerabilities."
    }
];
