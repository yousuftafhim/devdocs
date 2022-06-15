"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[93821],{48139:function(e,t,i){i.r(t),i.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var o=i(83117),a=i(80102),n=(i(67294),i(3905)),s=i(13904),l=["components"],r={title:"Automated code review",tags:["Coding guidelines","Tools"]},c=void 0,d={unversionedId:"development/tools/cibot",id:"development/tools/cibot",title:"Automated code review",description:"Moodle issues submitted for review and inclusion into core are examined by our continuous integration (ci) system and checked against various automated tests. We use the automated checks to help improve the code quality in Moodle.",source:"@site/general/development/tools/cibot.md",sourceDirName:"development/tools",slug:"/development/tools/cibot",permalink:"/devdocs/general/development/tools/cibot",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/cibot.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Tools",permalink:"/devdocs/general/tags/tools"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655257885,formattedLastUpdatedAt:"15/06/2022",frontMatter:{title:"Automated code review",tags:["Coding guidelines","Tools"]},sidebar:"coding",previous:{title:"NodeJS and Grunt",permalink:"/devdocs/general/development/tools/nodejs"}},h={},u=[{value:"What is CiBot?",id:"what-is-cibot",level:2},{value:"Will an issue be automatically rejected if CiBot checks fail?",id:"will-an-issue-be-automatically-rejected-if-cibot-checks-fail",level:2},{value:"Should coding style issues in existing code be fixed?",id:"should-coding-style-issues-in-existing-code-be-fixed",level:2},{value:"Example &quot;Should I fix coding style&quot; situations",id:"example-should-i-fix-coding-style-situations",level:3},{value:"Requesting CiBot checks an issue",id:"requesting-cibot-checks-an-issue",level:2},{value:"Are additional CiBot checks possible?",id:"are-additional-cibot-checks-possible",level:2},{value:"How do I report bugs in the CiBot report?",id:"how-do-i-report-bugs-in-the-cibot-report",level:2},{value:"The git commit summary  limit is too small",id:"the-git-commit-summary--limit-is-too-small",level:2},{value:"Branches based off integration.git",id:"branches-based-off-integrationgit",level:2},{value:"Why are issues held up by trivial issues reported which don&#39;t affect the functionality of the change?",id:"why-are-issues-held-up-by-trivial-issues-reported-which-dont-affect-the-functionality-of-the-change",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,(0,o.Z)({frontMatter:r},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("p",null,"Moodle issues submitted for review and inclusion into core are examined by our continuous integration (ci) system and checked against various automated tests. We use the automated checks to help improve the code quality in Moodle."),(0,n.kt)("h2",{id:"what-is-cibot"},"What is CiBot?"),(0,n.kt)("p",null,"CiBot is our automated code checker and it will run checks against any issues waiting for peer review, sent for integration or requested to be checked by the developer. It will report problems discovered in lines of your patch which you are changing."),(0,n.kt)("h2",{id:"will-an-issue-be-automatically-rejected-if-cibot-checks-fail"},"Will an issue be automatically rejected if CiBot checks fail?"),(0,n.kt)("p",null,"No. Developers should strive to have CiBot approve every patch submitted, but the integration team will take a pragmatic approach to things like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Occasions where CiBot will detect issues present in existing code"),(0,n.kt)("li",{parentName:"ul"},"Variations from commit message style which make the commit message more understandable overall")),(0,n.kt)("h2",{id:"should-coding-style-issues-in-existing-code-be-fixed"},"Should coding style issues in existing code be fixed?"),(0,n.kt)("p",null,"In short, please only update lines relating to your own change."),(0,n.kt)("p",null,"There are some conventions that are not uniformly followed in the code base, many of these are conventions put in place after code was written. Our long term goal is for the entire codebase to follow the conventions, but in general, we don't want large-scale reformatting of existing code. See ",(0,n.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle#policy-about-coding-style-only-fixes"},"Coding style#Policy about coding-style only fixes"),"."),(0,n.kt)("h3",{id:"example-should-i-fix-coding-style-situations"},'Example "Should I fix coding style" situations'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"a) Spacing of if statements is incorrect on the line being changed")),(0,n.kt)("p",null,"This can be corrected without affecting existing code, so should be fixed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"b) The line being changed contains an invalid variable name")),(0,n.kt)("p",null,"If correcting this variable would affect other parts of the code not covered by the patch then it's not reasonable to fix it."),(0,n.kt)("h2",{id:"requesting-cibot-checks-an-issue"},"Requesting CiBot checks an issue"),(0,n.kt)("p",null,"At any time a developer can add the label ",(0,n.kt)("inlineCode",{parentName:"p"},"cime")," to an issue to request it runs it checks against it. The bot ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_ci/blob/master/tracker_automations/bulk_precheck_issues/criteria/developer_request/query.sh"},"checks for issues with the cime label")," every 20mins and runs the checks then remove the cime label. (Note that because it removes the label, it is normal to 'create' the label)."),(0,n.kt)("p",null,"Any issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_ci/blob/master/tracker_automations/bulk_precheck_issues/criteria/awaiting_peer_review/query.sh"},"submitted for peer review")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_ci/blob/master/tracker_automations/bulk_precheck_issues/criteria/awaiting_integration/query.sh"},"integration review")," will be checked automatically as long as it does not already have the 'ci'  label."),(0,n.kt)("h2",{id:"are-additional-cibot-checks-possible"},"Are additional CiBot checks possible?"),(0,n.kt)("p",null,"Yes. It is planned to add more checks - (see ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLSITE-3267"},"MDLSITE-3267"),") and developers are encouraged to suggest new checks in that issue. Note that some limitations exist:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The checks should be consistent and completely reproducible"),(0,n.kt)("li",{parentName:"ul"},"The check should complete in minutes not hours (other solutions are in planning for longer term tests)")),(0,n.kt)("h2",{id:"how-do-i-report-bugs-in-the-cibot-report"},"How do I report bugs in the CiBot report?"),(0,n.kt)("p",null,"Please ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/CreateIssueDetails!init.jspa?pid=10020&issuetype=1&components=12431&summary=Problem%20with%20CiBot%20results%20on%20MDL-XXXXX"},"file an issue")," in the MDLSITE project, Integration component."),(0,n.kt)("h2",{id:"the-git-commit-summary--limit-is-too-small"},"The git commit summary  limit is too small"),(0,n.kt)("p",null,"When you overrun the length limit many git tools do not display commits well. See how ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/commits/ea6f5480818c31763f91a90a0cafb6a63ca18117"},"github truncates ea6f548081")," - it ruins the message and makes it harder for you to communicate your change to other developers."),(0,n.kt)("p",null,"It is acknowledged that its often tricky to get a useful message in such a short space on the first line. However, the coding guidelines for git summary line length were established on the basis of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/blog/926-shiny-new-commit-styles"},"industry")," ",(0,n.kt)("a",{parentName:"p",href:"http://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/Documentation/SubmittingPatches?id=aad7fb916a10f1065ad23de0c80a4a04bcba8437#n594"},"best")," ",(0,n.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting"},"practice"),". As the ",(0,n.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle#git-commits"},"Coding style")," mentions, do not be afraid to go into much more detail in your commit body."),(0,n.kt)("p",null,"Try ",(0,n.kt)("inlineCode",{parentName:"p"},"git log --oneline --no-merges")," if you want to see how other developers have tried to adapt to this situation."),(0,n.kt)("h2",{id:"branches-based-off-integrationgit"},"Branches based off integration.git"),(0,n.kt)("p",null,"The integration.git repository exists separately from moodle.git intentionally to indicate that its the place that ",(0,n.kt)("strong",{parentName:"p"},"history rewrites will happen"),". If a branch is based on outdated history which has been rewritten and is later attempted to merge it will result in a  mess (repeated history, attempt to re-introduce previously reverted changes). It is for this reason that we strongly recommend against any branches being created based on the integration.git branches due its changing nature. This problem is emphasised because history rewrites will commonly happen at the end of a weekly cycle, immediately before releasing the changes to moodle.git."),(0,n.kt)("p",null,"There are some rare cases where basing a branch off integration.git might be sensible:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Where the change would have non-trivial conflicts with integration.git changes (e.g. two commits changing the same function)"),(0,n.kt)("li",{parentName:"ul"},"Could not be branched from moodle.git with these conflicts resolved\nIf this case applies:"),(0,n.kt)("li",{parentName:"ul"},"CiBot will warn about the branch being based off integration.git"),(0,n.kt)("li",{parentName:"ul"},"The developer is expected to rebase once integration.git changes have been introduced to moodle.git to ensure that history-rewrites will not cause a merge mess")),(0,n.kt)("p",null,"If these case do not apply, we expect that you ",(0,n.kt)("strong",{parentName:"p"},"do not")," produce your branches based on integration.git."),(0,n.kt)("h2",{id:"why-are-issues-held-up-by-trivial-issues-reported-which-dont-affect-the-functionality-of-the-change"},"Why are issues held up by trivial issues reported which don't affect the functionality of the change?"),(0,n.kt)("p",null,"Moodle is a large software project, it is common that 50 different developers will change the same file. Some may produce one fix and never be seen again, others will produce hundreds of fixes. The purpose of our coding conventions is to help all developers communicate with a consistent style so that we can look at all changes and understand their purpose with out getting distracted by changes in style."),(0,n.kt)("p",null,"While the issues reported might be trivial compared to benefit of the fix, over the long term, communicating your change well through coding and commit conventions might be far more important."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'" programs must be written for people to read, and only incidentally for machines to execute"')),(0,n.kt)("p",null,"\u2015 Hal Abelson, Structure and Interpretation of Computer Programs"),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle"},"Coding style")," and other links in the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Category/Coding_guidelines"},"coding guidelines category"))))}p.isMDXComponent=!0}}]);