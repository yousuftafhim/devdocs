"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[47186],{80038:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),l=a(13904),n=["components"],i={title:"Moodle 3.5.1",tags:["Release notes","Moodle 3.5"],sidebar_position:1,moodleVersion:"3.5.1"},d=void 0,p={unversionedId:"releases/3.5/3.5.1",id:"releases/3.5/3.5.1",title:"Moodle 3.5.1",description:"Release date: 9 July 2018",source:"@site/general/releases/3.5/3.5.1.md",sourceDirName:"releases/3.5",slug:"/releases/3.5/3.5.1",permalink:"/devdocs/general/releases/3.5/3.5.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5/3.5.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655257885,formattedLastUpdatedAt:"15/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 3.5.1",tags:["Release notes","Moodle 3.5"],sidebar_position:1,moodleVersion:"3.5.1"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5",permalink:"/devdocs/general/releases/3.5"},next:{title:"Moodle 3.5.2",permalink:"/devdocs/general/releases/3.5/3.5.2"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,a=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 July 2018"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5.1"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62544"},"MDL-62544")," - Enable admins and privacy officers to make subject access requests on behalf of users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62211"},"MDL-62211")," - Data requests page may be filtered or sorted and is paginated"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62391"},"MDL-62391")," - User who made the data request shown on data requests page")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57968"},"MDL-57968")," - Multiple unnecessary Messaging AJAX requests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61702"},"MDL-61702")," - Can't install Moodle with MariaDB version >= 10.3.1"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59047"},"MDL-59047")," - Short answer question doesn't display correctly when using the Boost theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61189"},"MDL-61189")," - Calendar event descriptions not saved when using TinyMCE"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62239"},"MDL-62239")," - Drag and drop question types broken when using iOS 11.3"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51419"},"MDL-51419")," - Filename corruption on download when name contains multibyte chars when using MS Edge"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62658"},"MDL-62658")," - Notifications are not marked as read when clicked on"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62543"},"MDL-62543")," - New 'deleted' field for forum posts is used in the wrong way for RSS feeds"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62516"},"MDL-62516")," - Request to delete forum data for a user will delete files of all users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62440"},"MDL-62440")," - Participants page exhausts memory with many site-wide role assignments"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62358"},"MDL-62358")," - Question rendering API does not support all 'question numbers' that might be needed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60915"},"MDL-60915")," - get_recordset methods load entire result set into memory in Postgres"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62493"},"MDL-62493")," - Policy plugin problem when guests attempt to create an account"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62574"},"MDL-62574")," - Database exception when deleting user data from the HTML block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62532"},"MDL-62532")," - Predefined tags are not appearing in the question tag dropdown"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61832"},"MDL-61832")," - Editing options disappear after saving a Lesson page in expanded view"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56498"},"MDL-56498")," - Notifications are not marked as read when clicked in popover"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62270"},"MDL-62270")," - Cron task fails on data-privacy-related task when admin directory renamed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62320"},"MDL-62320")," - JSON should be enabled as a file type, as used in data export"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62735"},"MDL-62735")," - Simple search does not obey global search on/off setting"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58702"},"MDL-58702")," - Restore role mappings form has no label"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62705"},"MDL-62705")," - Global search results order selection does not display when no context"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62597"},"MDL-62597")," - Data requests date column should include time"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62519"},"MDL-62519")," - After making multiple attempts to record a video, only the last attempt should be saved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61932"},"MDL-61932")," - Glossary created via import does not display on the front page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61778"},"MDL-61778"),' - The online status icon in the messaging interface is a "play" button instead of a coloured dot'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58063"},"MDL-58063")," - Unable to access manage files within HTML block on Page resource when using the Clean theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61894"},"MDL-61894")," - Tag-managing dialog modals have unstyled buttons"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62386"},"MDL-62386")," - Audio file doesn't display when using HTML5 audio media player"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62796"},"MDL-62796")," - Policy popup should display for not logged in users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62288"},"MDL-62288")," - Glossary entries permalinks")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=373369"},"MSA-18-0014")," Privacy data exports include log data"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=373370"},"MSA-18-0015")," Web service core_course_get_categories may return invisible categories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=373371"},"MSA-18-0016")," Quiz question bank import preview could execute JavaScript")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5.1"},"Notes de mise \xe0 jour de Moodle 3.5.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5.1"},"Notas de Moodle 3.5.1"))))}k.isMDXComponent=!0}}]);