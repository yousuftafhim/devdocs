"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[91477],{52421:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),i=["components"],l={title:"Moodle 3.2.5",tags:["Release notes","Moodle 3.2"],sidebar_position:5,moodleVersion:"3.2.5"},d=void 0,m={unversionedId:"releases/3.2/3.2.5",id:"releases/3.2/3.2.5",title:"Moodle 3.2.5",description:"Release date: 11th September 2017",source:"@site/general/releases/3.2/3.2.5.md",sourceDirName:"releases/3.2",slug:"/releases/3.2/3.2.5",permalink:"/devdocs/general/releases/3.2/3.2.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.2/3.2.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.2",permalink:"/devdocs/general/tags/moodle-3-2"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655257885,formattedLastUpdatedAt:"15/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.2.5",tags:["Release notes","Moodle 3.2"],sidebar_position:5,moodleVersion:"3.2.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.2.4",permalink:"/devdocs/general/releases/3.2/3.2.4"},next:{title:"Moodle 3.2.6",permalink:"/devdocs/general/releases/3.2/3.2.6"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 11th September 2017"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.2.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.2.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57412"},"MDL-57412"),' - Setting "Always link course sections" should apply consistently in Boost and Clean/More'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58196"},"MDL-58196"),' - "Require passing grade" in the ',(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Activity_completion_settings#Quiz_completion_settings"},"Quiz activity completion settings"),' can only be checked if "Student must receive a grade" is also checked'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57698"},"MDL-57698")," - Bug fix: Backup and restore cause deadlock with sqlsrv driver")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55912"},"MDL-55912")," - Assignment: when blink marking is enabled, students should receive teacher participant number in the email and not their own"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54607"},"MDL-54607")," - Calendar export should not export events without duration as full-day events, i.e. assignment due dates have time component that was being lost during export"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59490"},"MDL-59490")," - Bug fix: LTI does not work when activity has a long name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55937"},"MDL-55937")," - Assignment: fixed error when viewing attachments of team submission"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35290"},"MDL-35290")," - My private files should continue working even if some files in filesystem are currently unreadable"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57259"},"MDL-57259")," - Fixed bug that caused polluting error.log with debugging information when teachers use assignment grading"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56646"},"MDL-56646"),' - Assignment: changing maximum grade of the module could result in negative grades in assignment which were pushed as "0" to the gradebook. This bug was fixed and will not happen in the future. However, according to Moodle policy, no existing grades were changed. Teachers will see the warning that there are erroneous grades and will be able to fix all of them with one click'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-54965"},"MDL-54965")," - Database module: fixed SQL error when you edit an entry after having added a new picture/file field"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46495"},"MDL-46495"),' - When uploading courses the setting "Completion tracking" should be set to the site default'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38129"},"MDL-38129")," - Grade export of user profile fields can now work with uppercase letters in the fields names"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59317"},"MDL-59317")," - Performance improvements on the messages page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57246"},"MDL-57246")," - Trying to view a forum without the capability may lead you to a broken page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55364"},"MDL-55364")," - Forum headers alignment on narrow screens"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58119"},"MDL-58119")," - Use Cache-Control: immutable (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57789"},"MDL-57789"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57649"},"MDL-57649")," - Lesson: Fixed bug deleting files unrelated to the pages being deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59195"},"MDL-59195")," - Assignments: when switching role to student teacher should be able to view group submissions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59068"},"MDL-59068"),' - Lesson: Restore the behaviour of "No, I just want to go on to the next question"')),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=358585"},"MSA-17-0017"),' XSS in contact form on "non-respondents" page in non-anonymous feedback'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=358586"},"MSA-17-0018")," Course reports are not respecting group settings in courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=358587"},"MSA-17-0019")," user_can_view_profile() incorrectly assumes $course as shared course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=358588"},"MSA-17-0020")," Admins may not know that exposing vendor directory is a security risk")),(0,s.kt)("h2",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59708"},"MDL-59708")," - Hooks into the file API (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57476"},"MDL-57476"),")")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.2.5"},"Notes de mise \xe0 jour de Moodle 3.2.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.2.5"},"Notas de Moodle 3.2.5"))))}c.isMDXComponent=!0}}]);