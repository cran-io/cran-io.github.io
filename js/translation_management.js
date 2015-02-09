$(document).ready(function(){
   var language = window.navigator.userLanguage || window.navigator.language;
   if (language.substring(0,2) == "es")
   {   set_language("es");
     $('.esButton').css("color", "#25252D");
   }
   else
   {   set_language("en");
     $('.enButton').css("color", "#25252D");
   }

   
   $('.flag').click(function(){
      set_language($(this).data("language"));
   });
});

function set_language(language){
   var t = translations[language];
   // index
   $('#slogan').html(t.slogan);
   $('.cranioSubtitle').each(function(){
      $(this).html(t.cranio_subtitle);
   });
   $('.whatWeDoTitle').each(function(){
      $(this).html(t.what_we_do);
   });
   $('.whatWeDoSubtitle').each(function(){
      $(this).html(t.what_we_do_slogan);
   });
   $('.hardwareDescription').each(function(){
      $(this).html(t.hardware_content);
   });
   $('.softwareDescription').each(function(){
      $(this).html(t.software_content);
   });
   
   $('.webServices').each(function(){
      $(this).html(t.web_services);
   });
   $('.dataProcessing').each(function(){
      $(this).html(t.data_processing);
   });
   $('.mobileApps').each(function(){
      $(this).html(t.mobile_apps);
   });
   $('.hardwareDesign').html(t.hardware_design);
   $('.embeddedSystems').each(function(){
      $(this).html(t.embedded_systems);
   });
   $('.signalProcessing').each(function(){
      $(this).html(t.signal_processing);
   });
   
   $('.technology').each(function(){
      $(this).html(t.technology);
   });
   $('.technologyDescription').each(function(){
      $(this).html(t.technology_description);
   });
   
   $('.webServicesDescription').each(function(){
      $(this).html(t.web_services_description);
   });
   $('.dataProcessingDescription').each(function(){
      $(this).html(t.data_processing_description);
   });
   $('.mobileAppsDescription').each(function(){
      $(this).html(t.mobile_apps_description);
   });
   $('.hardwareDesignDescription').each(function(){
      $(this).html(t.hardware_design_description);
   });
   $('.embeddedSystemsDescription').each(function(){
      $(this).html(t.embedded_systems_description);
   });
   $('.signalProcessingDescription').each(function(){
      $(this).html(t.signal_processing_description);
   });
   $('.technologyDescription').each(function(){
      $(this).html(t.technology_description);
   });

   $('.theTeam').html(t.the_team);
   $('.theTeamDescription').html(t.the_team_description);

   $("#weAreHiringButton").html(t.we_are_hiring_button);

   $("#latestProjects").html(t.latest_projects);
   $("#latestProjectsDescription").html(t.latest_projects_description);

   $('.haveAnIdeaTitle').html(t.have_an_idea_title);
   $('.haveAnIdeaFP').html(t.have_an_idea_first_paragraph);
   $('.haveAnIdeaSP').html(t.have_an_idea_second_paragraph);
   $('#mailUs').html(t.mail_us_button);

   $('.locationTitle').html(t.location);

   $('#contactUsModalTitle').html(t.modal_write_us);
   $('#finalMessageModalTitle').html(t.modal_after_sent_message);
   $('.sendCloseButtons').html(t.modal_send);
}
