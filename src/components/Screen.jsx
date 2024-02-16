<!DOCTYPE html>
<!-- saved from url=(0074)https://github.com/acl2003/Task_1/blob/main/src/components/Events/index.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-turbo-loaded="" class="js-focus-visible" data-js-focus-visible=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style>
    
  
  
  
  
  
  

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/light-0eace2597ca3.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/dark-a167e256da9c.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-d11f2cf8009b.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-ea7373db06c8.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-afa99dcf40f7.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-af6c685139ba.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-578cdbc8a5a9.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-5cb699a7e247.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-9b32204967c6.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/primer-primitives-971c6be3ec9f.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/primer-08e422afeb43.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/global-a8d2cbec31a6.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/github-36dce55f3db6.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/repository-389a4d55bc31.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Screen_files/code-7d0225fe7e18.css">

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["billing_net_usage_frontend","copilot_conversational_ux_history_refs","copilot_persistent_chat_panel","docset_management_ui","failbot_handle_non_errors","geojson_azure_maps","image_metric_tracking","marketing_forms_api_integration_contact_request","repository_suggester_elastic_search","turbo_experiment_risky","sample_network_conn_type","no_character_key_shortcuts_in_inputs","custom_inp","remove_child_patch"]}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/wp-runtime-119738afe068.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_dompurify_dist_purify_js-6890e890956f.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183-79f9611c275b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_hydro-analytics-client_dist_analytics-client_js-node_modules_gith-6a10dd-e66ebda625fb.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/ui_packages_failbot_failbot_ts-afaa9a250f2e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/environment-4ff0d843ea45.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-9f960d9b217c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js-086f7a27bac0.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_relative-time-element_dist_index_js-c76945c5961a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-29dc30-a2a71f11a507.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_auto-complete-element_dist_index_js-d6c09d7e4e48.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b7d8f4-8cd02f324209.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-6ff72b-44df89427254.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/github-elements-91586b615d25.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/element-registry-572e9d2514ec.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc0-add939c751ce.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_lit-html_lit-html_js-5b376145beff.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2-1b562c29ab8e.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_morphdom_dist_morphdom-esm_js-5bff297a06de.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-c91f4ad18b62.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_color-convert_index_js-72c9fbde5ad4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_scroll-anchoring_dist_scro-231ccf-aa129238d13b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_behaviors_dist_esm_dimensions_js-node_modules_github_jtml_lib_index_js-95b84ee6bc34.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_paste-markdown_dist_index_esm_js-node_modules_github_quote-select-cbac5f-5c15271fc07d.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_updatable-content_ts-5e0904652c1c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_onfocus_ts-app_ass-421cec-751caa0072bd.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_sticky-scroll-into-view_ts-cbcee0788fe3.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-467754-b59a2b2827ad.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-b85e9f4f1304.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-c96432-ca86212e46a4.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/behaviors-8764a060701a.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-d0256ebff5cd.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/notifications-global-99d196517b1b.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js-878844713bc9.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-c537341-c7f6a41a084c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_ref-selector_ts-92d4050cac07.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/codespaces-428efe29b21c.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_mini-throt-08ab15-3e0517baca99.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_mini-th-55cf52-26041abdd865.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/repositories-bd882e9d6550.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/code-menu-2658b004279a.js.download"></script>
  

  



  
  
  

    
  


  


    


  
  

  
  

    
  
  
  
  



  

  




  

    

  

    
    
      
      
    
    
    
      
      
      

      
      


        


      

        


  <meta http-equiv="x-pjax-version" content="1772b34c55858044f4b2811dda6aec7183239363c2e40e8b07076bc27c0e637b" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="5dcfbec3488c5fd5a334e287ce6a17058b7d4beb91db2d4d184e4d55bbf1d7d7" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="fc7dfbcc4179b73e820d020658f54500fa28c573604791e50a58cef56e331033" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="de12cefe23ed8f8fc9dda9875f74dc1e2325519c8f9694cfe822c0e25dcc90c4" data-turbo-track="reload">

  

      

  

  



    
  


  

  

  
  
  





  

  <style data-styled="active" data-styled-version="5.3.6"></style><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: var(--color-scale-gray-9) !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: var(--color-scale-white) !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: var(--color-scale-purple-2) !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: var(--color-scale-gray-9) !important;
            border: 1px solid var(--color-scale-purple-2) !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: var(--color-scale-purple-2) !important;
            background-color: var(--color-scale-gray-9) !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid var(--color-scale-white) !important;
            background-color: var(--color-scale-white) !important;
            color: var(--color-scale-black) !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: var(--color-scale-black) !important;
            background-color: var(--color-scale-purple-2) !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: var(--color-scale-purple-2) !important;
            box-shadow: none !important;
            border: 2px solid var(--color-scale-white) !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: var(--color-scale-black) !important;
            background-color: var(--color-scale-white) !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid var(--color-scale-gray-1) !important;
            background-color: var(--color-scale-gray-8) !important;
            color: var(--color-scale-white) !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: var(--color-scale-white) !important;
            background-color: var(--color-scale-gray-9) !important;
            box-shadow: none !important;
            border: 1px solid var(--color-scale-white) !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: var(--color-scale-gray-9) !important;
            box-shadow: none !important;
            border: 2px solid var(--color-scale-gray-5) !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: var(--color-scale-white) !important;
            background-color: var(--color-scale-gray-7) !important;
            border: 1px solid var(--color-scale-gray-5) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid var(--color-scale-purple-2) !important;
            background-color: var(--color-scale-gray-9) !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid var(--color-scale-white) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: var(--color-scale-purple-2) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid var(--color-scale-white) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: var(--color-scale-white) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid var(--color-scale-white) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: var(--color-scale-purple-2) !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/react-lib-1fbfc5be2c18.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c-b299afe58dd7.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Box_Box_js-ebfceb11fb57.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Button_Button_js-0528cb519251.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_ActionList_index_js-e001d0eead25.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Overlay_Overlay_js-node_modules_primer_react_lib-es-fa1130-8d276499c3fb.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-85a14b-249efa9c2fae.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_behaviors_dist_esm_scroll-into-view_js-node_modules_primer_react_-39745e-56454ece1686.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js-e905f63cdd0f.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_ActionMenu_ActionMenu_js-a3c61ff6363e.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_react-router-dom_dist_index_js-3b41341d50fe.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js-a0f5dc4acaba.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_ConfirmationDialog_ConfirmationDialog_js-1396cd0754d9.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Dialog_js-node_modules_primer_react_lib-esm_Flash_F-ad64b6-7663299a84eb.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_UnderlineNav_index_js-68debb3ba7c5.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-abca1b-e1f48b432bcb.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_TreeView_TreeView_js-5d623f8c8e93.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_primer_react_lib-esm_Ava-0e2e9e-fbaf16e28a3a.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92-64923177f972.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/ui_packages_react-core_register-app_ts-f7fc9821bc0f.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/ui_packages_paths_index_ts-ecae1bcc01e3.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/ui_packages_ref-selector_RefSelector_tsx-858bb94813b1.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-1e98c0-59848352f3aa.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_react-code-view_hooks_use-file-page-payload_ts-app_assets_modules_react-sh-2c8949-82086fe1a3a1.js.download"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/react-code-view-cc40a1dfa723.js.download"></script><link rel="dns-prefetch" href="https://github.githubassets.com/"><link rel="dns-prefetch" href="https://avatars.githubusercontent.com/"><link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/"><link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"><link rel="preconnect" href="https://github.githubassets.com/" crossorigin=""><link rel="preconnect" href="https://avatars.githubusercontent.com/"><title>Task_1/src/components/Events/index.js at main · acl2003/Task_1</title><meta name="route-pattern" content="/:user_id/:repository/tree/*name(/*path)" data-turbo-transient=""><meta name="route-controller" content="files" data-turbo-transient=""><meta name="route-action" content="disambiguate" data-turbo-transient=""><meta name="current-catalog-service-hash" content="82c569b93da5c18ed649ebd4c2c79437db4611a6a1373e805a3cb001c64130b7"><meta name="request-id" content="CFE4:100EA3:32BFD6:35989F:65CE0726" data-turbo-transient="true"><meta name="html-safe-nonce" content="439126af26174f157e6568f086b63698c8785885946681362a6ac7fcfca82a7a" data-turbo-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9hY2wyMDAzL1Rhc2tfMSIsInJlcXVlc3RfaWQiOiJDRkU0OjEwMEVBMzozMkJGRDY6MzU5ODlGOjY1Q0UwNzI2IiwidmlzaXRvcl9pZCI6IjgyMzczNjY5Mzg4OTk5NzYyNDMiLCJyZWdpb25fZWRnZSI6ImNlbnRyYWxpbmRpYSIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-turbo-transient="true"><meta name="visitor-hmac" content="99adcc8fab2769ddac72ca88b5d3cd2fca45e3c65e412ea7f7af9196ac334587" data-turbo-transient="true"><meta name="hovercard-subject-tag" content="repository:750685190" data-turbo-transient=""><meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true"><meta name="selected-link" value="repo_source" data-turbo-transient=""><link rel="assets" href="https://github.githubassets.com/"><meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY"><meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU"><meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA"><meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc"><meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I"><meta name="octolytics-url" content="https://collector.github.com/github/collect"><meta name="octolytics-actor-id" content="157194046"><meta name="octolytics-actor-login" content="sravan321-hub"><meta name="octolytics-actor-hash" content="092fc6c59e6a5d017796308e0eb348ff4bbca25dd17c75bd941e99c51b860e0d"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/files/disambiguate" data-turbo-transient="true"><meta name="user-login" content="sravan321-hub"><link rel="sudo-modal" href="https://github.com/sessions/sudo_modal"><meta name="turbo-cache-control" content="no-preview" data-turbo-transient=""><meta name="turbo-cache-control" content="no-cache" data-turbo-transient=""><meta data-hydrostats="publish"><meta name="go-import" content="github.com/acl2003/Task_1 git https://github.com/acl2003/Task_1.git"><meta name="octolytics-dimension-user_id" content="158204520"><meta name="octolytics-dimension-user_login" content="acl2003"><meta name="octolytics-dimension-repository_id" content="750685190"><meta name="octolytics-dimension-repository_nwo" content="acl2003/Task_1"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="750685190"><meta name="octolytics-dimension-repository_network_root_nwo" content="acl2003/Task_1"><meta name="turbo-body-classes" content="logged-in env-production page-responsive"><meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"><meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"><link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000"><link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png"><link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg"><meta name="theme-color" content="#1e2327"><meta name="color-scheme" content="light dark"><link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials"><style type="text/css" id="ms-consent-banner-theme-styles"></style></head>

  <body class="logged-in env-production page-responsive intent-mouse" style="overflow-wrap: break-word; --dialog-scrollgutter: 17px;">
    <div data-turbo-body="" class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative js-header-wrapper ">
      <a href="https://github.com/acl2003/Task_1/blob/main/src/components/Events/index.js#start-of-content" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
  




<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_primer_react_lib-esm_Button_IconButton_js-node_modules_primer_react_lib--23bcad-ccf1d5fc6054.js.download"></script>

<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/keyboard-shortcuts-dialog-a2ca669523db.js.download"></script>

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>



      

        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_allex_crc32_lib_crc32_esm_js-node_modules_github_mini-throttle_dist_deco-b38cad-748e74df23ce.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-b37f7d-2f24d321a3fb.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-b180134b83d3.js.download"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Screen_files/command-palette-4a91d9475ff6.js.download"></script>

            <header class="AppHeader">
    

    <div class="AppHeader-globalBar pb-2 js-global-bar">
      <div class="AppHeader-globalBar-start">
          <deferred-side-panel data-url="/_side-panels/global" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
      <button aria-label="Open global navigation menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-eb673f0d-324b-430d-8432-b045bd14d16d" id="dialog-show-dialog-eb673f0d-324b-430d-8432-b045bd14d16d" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-bg-transparent p-0 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>

<dialog-helper>
  <dialog data-target="deferred-side-panel.panel" id="dialog-eb673f0d-324b-430d-8432-b045bd14d16d" aria-modal="true" aria-labelledby="dialog-eb673f0d-324b-430d-8432-b045bd14d16d-title" aria-describedby="dialog-eb673f0d-324b-430d-8432-b045bd14d16d-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-left SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-eb673f0d-324b-430d-8432-b045bd14d16d-title">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-eb673f0d-324b-430d-8432-b045bd14d16d" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="dialog-eb673f0d-324b-430d-8432-b045bd14d16d-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body d-flex flex-column px-2">    <div data-view-component="true" class="d-flex flex-column mb-3">
        <nav aria-label="Site navigation" data-view-component="true" class="ActionList">
  
  <nav-list data-catalyst="">
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-17965427-d999-41d9-8721-0d882d915887" href="https://github.com/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Home
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-1a1e6efa-1e14-4f4b-a7ae-79318211c988" href="https://github.com/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-6db251ea-841e-497b-be05-26400fd1fd76" href="https://github.com/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROJECTS&quot;,&quot;label&quot;:null}" id="item-494d6254-d314-420e-a22f-a813e300f422" href="https://github.com/projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-6bcf0431-d856-4678-ba02-65df85cf7481" href="https://github.com/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Discussions
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-dbf43740-be7b-49e3-ad13-96851eb859cb" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Codespaces
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-9d2617c5-4028-4f79-afec-70ecb222af6c" href="https://github.com/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Explore
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-14d14c11-f995-43aa-a46a-515e803ba353" href="https://github.com/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Marketplace
</span></a>
  
  
</li>

</ul>  </nav-list>
</nav>

        <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full">
          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
      <div data-view-component="true" class="flex-1"></div>


      <div data-view-component="true" class="px-2">      <p class="color-fg-subtle text-small text-light">© 2024 GitHub, Inc.</p>

      <div data-view-component="true" class="d-flex flex-wrap text-small text-light">
          <a target="_blank" href="https://github.com/about" data-view-component="true" class="Link mr-2">About</a>
          <a target="_blank" href="https://github.blog/" data-view-component="true" class="Link mr-2">Blog</a>
          <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2">Terms</a>
          <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2">Privacy</a>
          <a target="_blank" href="https://github.com/security" data-view-component="true" class="Link mr-2">Security</a>
          <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3">Status</a>

</div></div>
</div>
      </scrollable-region>
      
</dialog></dialog-helper>

  </include-fragment>
</deferred-side-panel>

        <a class="AppHeader-logo ml-2" href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
        </a>

          <div class="AppHeader-context">
  <div class="AppHeader-context-compact">
      <button aria-expanded="false" aria-haspopup="dialog" aria-label="Page context: acl2003 / Task_1" id="dialog-show-context-region-dialog" data-show-dialog-id="context-region-dialog" type="button" data-view-component="true" class="AppHeader-context-compact-trigger Truncate Button--secondary Button--medium Button box-shadow-none">  <span class="Button-content">
    <span class="Button-label"><span class="AppHeader-context-compact-lead">
                <span class="AppHeader-context-compact-parentItem">acl2003</span>
                <span class="no-wrap">&nbsp;/</span>

            </span>

            <strong class="AppHeader-context-compact-mainItem d-flex flex-items-center Truncate">
  <span class="Truncate-text ">Task_1</span>

</strong></span>
  </span>
</button>

<dialog-helper>
  <dialog id="context-region-dialog" aria-modal="true" aria-labelledby="context-region-dialog-title" aria-describedby="context-region-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="context-region-dialog-title">
        Navigate back to
      </h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="context-region-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="context-region-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">          <ul role="list" class="list-style-none">
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;acl2003&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="https://github.com/acl2003" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-person mr-1">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>

          acl2003
        </span>

</a>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Task_1&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="https://github.com/acl2003/Task_1" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1">
        <span class="AppHeader-context-item-label Truncate-text ">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-repo mr-1">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>

          Task_1
        </span>

</a>
    </li>
</ul>

</div>
      </scrollable-region>
      
</dialog></dialog-helper>
  </div>

  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="Page context">
      <ul role="list" class="list-style-none">
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;acl2003&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/acl2003/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/acl2003" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          acl2003
        </span>

</a>
        <span class="AppHeader-context-item-separator">/</span>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Task_1&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="https://github.com/acl2003/Task_1" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  ">

          Task_1
        </span>

</a>
    </li>
</ul>

    </nav>
  </div>
</div>

      </div>
      <div class="AppHeader-globalBar-end">
          <div class="AppHeader-search">
              


<qbsearch-input class="search-input" data-scope="repo:acl2003/Task_1" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="nR19caUB56YH5PrVidXul8T-C41ClPMeLelN83EoA4vk8padHqU9rDqWGhlJjAw20iRDJn9RPcBYsVpusog7hA" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="acl2003/Task_1" data-current-org="" data-current-owner="acl2003" data-logged-in="true" data-copilot-chat-enabled="false" data-blackbird-indexed-repo-csrf="&lt;input type=&quot;hidden&quot; value=&quot;zl5KmTdUQPGVNEVbYDUR46c9RsEjVOl1cSN2SYvQRdx68cCOwUr0UrKoI1oU1UX3IbfuD6NNOc-6Sz-zaFa_xA&quot; data-csrf=&quot;true&quot; /&gt;" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0" data-action="click:qbsearch-input#searchInputContainerClicked">
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control">
      <label for="AppHeader-searchInput" aria-label="Search or jump to…" class="AppHeader-search-visual--leading">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button type="button" data-target="qbsearch-input.inputButton" data-action="click:qbsearch-input#handleExpand" class="AppHeader-searchButton form-control input-contrast text-left color-fg-subtle no-wrap placeholder" data-hotkey="s,/" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SEARCH&quot;,&quot;label&quot;:null}">
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText">
                  Type <kbd class="AppHeader-search-kbd">/</kbd> to search
              </span>
            </div>
          </button>

    </div>


      <button type="button" id="AppHeader-commandPalette-button" class="AppHeader-search-action--trailing js-activate-command-palette" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;command_palette&quot;,&quot;label&quot;:&quot;open command palette&quot;}" aria-labelledby="tooltip-6478b145-9b9b-4a13-b912-c0fa5b6db676">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-command-palette">
    <path d="m6.354 8.04-4.773 4.773a.75.75 0 1 0 1.061 1.06L7.945 8.57a.75.75 0 0 0 0-1.06L2.642 2.206a.75.75 0 0 0-1.06 1.061L6.353 8.04ZM8.75 11.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z"></path>
</svg>
      </button>

      <tool-tip id="tooltip-6478b145-9b9b-4a13-b912-c0fa5b6db676" for="AppHeader-commandPalette-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Command palette</tool-tip>
  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto">
      <h1 id="search-suggestions-dialog-header" class="sr-only">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone">
      
          <div data-view-component="true">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/acl2003/Task_1/blob/main/src/components/Events/index.js" accept-charset="UTF-8" method="get">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="">
    <div class="FormControl FormControl--fullWidth">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-399d2ce6-f699-429d-92e9-ebc6e1182675" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

        <div class="position-relative">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-399d2ce6-f699-429d-92e9-ebc6e1182675" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only">0 suggestions.</div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2">
              Search syntax tips
</a>            <div class="d-flex flex-1"></div>
              <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2">  <span class="Button-content">
    <span class="Button-label">Give feedback</span>
  </span>
</button>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default">
    
<dialog-helper>
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="feedback-dialog-title">
        Provide feedback
      </h1>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="1jGoI13ZmgT3p9zAk2tvgDGPbiSXneaC-v0KAH95U8pOhRuagzKTlFr2wvYPAsIoezDS5EWDTQCUdNahVrtdKA">
          <p>We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox">
          <label for="include_email" style="font-weight: normal">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="">
    
<dialog-helper>
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="nj-32iYVvVpROyTlBjpQypH7hYNGt08EqsYNLSbNFWCHG_Nbd9UtElMj61gxbqOcJsJq_opJu2k-Ge0ROrHr3g">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group">
            <label for="custom_scope_name">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false">
              <input type="hidden" value="GH1qdeNNm2LoolIXm7gcR3rip5mzOkYgFl6IZqSXfotvwId7Vs7q8PyxPliOcoN8MzoiMb2RN5ugvIghYzadTg" data-csrf="true">
            </auto-check>
          </div>

          <div class="form-group">
            <label for="custom_scope_query">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500">
          </div>

          <p class="text-small color-fg-muted">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input><input type="hidden" value="voz7HIndglD8t_zx8xacQoTNTfyARd5fbbI9ZiUgzYHrsrIRP6aSsqc7KwAhoTW81slQgpUBgTOnqpXKZQJkgg" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">

          </div>

        <div class="AppHeader-actions position-relative">
          <action-menu data-select-variant="none" data-view-component="true" data-catalyst="">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="global-create-menu-button" popovertarget="global-create-menu-overlay" aria-label="Create something new" aria-controls="global-create-menu-list" aria-haspopup="true" type="button" data-view-component="true" class="AppHeader-button Button--secondary Button--small Button width-auto color-fg-muted" aria-describedby="tooltip-b46aeaca-2a44-471e-9740-b1313f83d3b5">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-b46aeaca-2a44-471e-9740-b1313f83d3b5" for="global-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new...</tool-tip>


<anchored-position id="global-create-menu-overlay" anchor="global-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 70.3333px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <div data-view-component="true">
  <ul aria-labelledby="global-create-menu-button" id="global-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/new" tabindex="-1" id="item-4a3ae9fc-55bd-436f-b1b2-09a475537e7f" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
              New repository

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;import repository&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/new/import" tabindex="-1" id="item-684af7e0-6d66-4dbf-90d4-cf7b9e1b8901" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-push">
    <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                Import repository

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new codespace&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/codespaces/new" tabindex="-1" id="item-3ff81afb-1bb1-45d1-80ad-c0de3dba10a7" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New codespace

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new gist&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-085f3850-1afc-4916-9085-d10e5d924d87" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New gist

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/account/organizations/new" tabindex="-1" data-dont-follow-via-test="true" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new organization&quot;}" id="item-29cb4707-44ab-4289-bd52-387c5ee92486" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-organization">
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New organization

</span></a>
  
  
</li>
</ul>  
</div>

</div>
      
</div></anchored-position>  </focus-group>
</action-menu>


          <a href="https://github.com/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-e4ff61a7-b14a-49d4-a883-b618c8f888d6" aria-labelledby="tooltip-267d5f30-13d9-4ea4-ae98-1778c64ab0c4" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a><tool-tip id="tooltip-267d5f30-13d9-4ea4-ae98-1778c64ab0c4" for="icon-button-e4ff61a7-b14a-49d4-a883-b618c8f888d6" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Issues</tool-tip>

          <a href="https://github.com/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-a6ee65e6-0509-47ee-97b6-eee759b726e0" aria-labelledby="tooltip-736295c4-e00e-44e0-be95-b1db42561264" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-736295c4-e00e-44e0-be95-b1db42561264" for="icon-button-a6ee65e6-0509-47ee-97b6-eee759b726e0" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Pull requests</tool-tip>

        </div>

        
<notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTU3MTk0MDQ2IiwidCI6MTcwODAwMTA2OX0=--6e714dc7c1e453a957798c9b65dc31387e91c0cf61bbd239c7284479110024b9" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel" data-fetch-retry-delay-time="500" data-catalyst="">
    <a id="AppHeader-notifications-button" href="https://github.com/notifications" aria-label="Notifications" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:read&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted" aria-describedby="tooltip-e5206b7e-f207-4713-bb26-e00bc4a0b448">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</a>

    <tool-tip data-target="notification-indicator.tooltip" id="tooltip-e5206b7e-f207-4713-bb26-e00bc4a0b448" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You have no unread notifications</tool-tip>
</notification-indicator>

        

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?repository_id=750685190" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
      <user-drawer-side-panel data-catalyst="">
    <button aria-label="Open user account menu" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189" id="dialog-show-dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189" type="button" data-view-component="true" class="AppHeader-logo Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0">  <span class="Button-content">
    <span class="Button-label"><img src="./Screen_files/157194046" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></span>
  </span>
</button>

<dialog-helper>
  <dialog data-target="deferred-side-panel.panel" id="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189" aria-modal="true" aria-labelledby="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189-title" aria-describedby="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-right SidePanel">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header">
  <div class="Overlay-headerContentWrap">
    <div class="Overlay-titleWrap">
      <h1 class="Overlay-title sr-only" id="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189-title">
        Account menu
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <img src="./Screen_files/157194046" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle">
</div>        <div data-view-component="true" class="overflow-hidden d-flex width-full">        <div data-view-component="true" class="lh-condensed overflow-hidden d-flex flex-column flex-justify-center ml-2 f5 mr-auto width-full">
          <span data-view-component="true" class="Truncate text-bold">
    <span data-view-component="true" class="Truncate-text">
            sravan321-hub
</span>
</span>          </div>
        <action-menu data-select-variant="none" data-view-component="true" class="d-sm-none d-md-none d-lg-none" data-catalyst="">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="user-create-menu-button" popovertarget="user-create-menu-overlay" aria-label="Create something new" aria-controls="user-create-menu-list" aria-haspopup="true" type="button" data-view-component="true" class="AppHeader-button Button--secondary Button--small Button width-auto color-fg-muted" aria-describedby="tooltip-7f636555-b29a-413b-953a-31258323a346">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-7f636555-b29a-413b-953a-31258323a346" for="user-create-menu-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new...</tool-tip>


<anchored-position id="user-create-menu-overlay" anchor="user-create-menu-button" align="end" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 4px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <div data-view-component="true">
  <ul aria-labelledby="user-create-menu-button" id="user-create-menu-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new repository&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/new" tabindex="-1" id="item-804fe3c0-1b11-4776-a2d8-df6e8ef92e7f" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
              New repository

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;import repository&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/new/import" tabindex="-1" id="item-b4df6a5c-7ffb-4a2c-a492-4cec9c93ce69" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-push">
    <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                Import repository

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new codespace&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/codespaces/new" tabindex="-1" id="item-6cb8fec4-5e11-4d64-8d8f-0b33e464e5b6" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New codespace

</span></a>
  
  
</li>
      <li data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new gist&quot;}" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://gist.github.com/" tabindex="-1" id="item-6839c2d0-77de-4cc0-8050-c93783ce52c8" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New gist

</span></a>
  
  
</li>
      <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
      <li data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a href="https://github.com/account/organizations/new" tabindex="-1" data-dont-follow-via-test="true" data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;add_dropdown&quot;,&quot;label&quot;:&quot;new organization&quot;}" id="item-cf1d34fd-68ed-4041-8a93-5427ff29f3bb" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-organization">
    <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
                New organization

</span></a>
  
  
</li>
</ul>  
</div>

</div>
      
</div></anchored-position>  </focus-group>
</action-menu>

</div>
</div>
    </div>
    <div class="Overlay-actionWrap">
      <button data-close-dialog-id="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
</div>
      <scrollable-region data-labelled-by="dialog-f6f5ce93-7a7b-4700-a5d0-b4548d30c189-title" data-catalyst="" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body d-flex flex-column px-2">    <div data-view-component="true" class="d-flex flex-column mb-3">
        <nav aria-label="User navigation" data-view-component="true" class="ActionList">
  
  <nav-list data-catalyst="">
    <ul data-view-component="true" class="ActionListWrap">
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <button id="item-9ed226b1-3ea4-4d31-ab4d-c0efc964e08b" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROFILE&quot;,&quot;label&quot;:null}" id="item-d52540df-29f1-47c2-ae2a-5acd0f82433c" href="https://github.com/sravan321-hub" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-person">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your profile
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <button id="item-c2ad8c02-08f9-46cd-8dc4-afa2f8ab0a44" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;label&quot;:null}" id="item-4624825b-caeb-4bc0-9326-4d5225deac16" href="https://github.com/sravan321-hub?tab=repositories" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your repositories
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_PROJECTS&quot;,&quot;label&quot;:null}" id="item-84bf26ba-6df5-427b-aa2e-af2b13a749c6" href="https://github.com/sravan321-hub?tab=projects" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-project">
    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your projects
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <button id="item-1d210229-d164-4fb8-a3a8-51f02978f25b" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <button id="item-fd319831-5529-4d61-b702-4040cd6facbf" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_STARS&quot;,&quot;label&quot;:null}" id="item-73967742-323d-43b5-ae16-bb74c7e15b55" href="https://github.com/sravan321-hub?tab=stars" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your stars
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SPONSORS&quot;,&quot;label&quot;:null}" id="item-88040ae0-e548-4760-bc4b-11f6e76e90bd" href="https://github.com/sponsors/accounts" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-heart">
    <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your sponsors
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;YOUR_GISTS&quot;,&quot;label&quot;:null}" id="item-3e648727-6980-42ec-b854-a3a7dd1d4cad" href="https://gist.github.com/mine" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code-square">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Your gists
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <button id="item-234b931b-9a94-4d37-9341-463a8927bc60" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <button id="item-47bf7b14-8ba8-499e-852f-ccad373a8c41" type="button" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <span data-view-component="true" class="d-flex flex-items-center">    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
</span>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          

  <span class="color-fg-muted">
    Loading...
  </span>

</span></button>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SETTINGS&quot;,&quot;label&quot;:null}" id="item-e98d09bd-2a70-4513-b666-a42dbaff6c40" href="https://github.com/settings/profile" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gear">
    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Settings
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DOCS&quot;,&quot;label&quot;:null}" id="item-c2df59cb-94ba-4a5d-af5f-6a77eecb3f23" href="https://docs.github.com/" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          GitHub Docs
</span></a>
  
  
</li>

        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;SUPPORT&quot;,&quot;label&quot;:null}" id="item-0f790381-da0c-4cb3-a9cd-2e22ca96a97f" href="https://support.github.com/" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-people">
    <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          GitHub Support
</span></a>
  
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-targets="nav-list.items nav-list.items" data-item-id="" data-view-component="true" class="ActionListItem">
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;LOGOUT&quot;,&quot;label&quot;:null}" id="item-0ba0f6bd-e45f-42e1-bc78-9f6a44b3421c" href="https://github.com/logout" data-view-component="true" class="ActionListContent">
      
        <span data-view-component="true" class="ActionListItem-label">
          Sign out
</span></a>
  
  
</li>

</ul>  </nav-list>
</nav>


</div>
</div>
      </scrollable-region>
      
</dialog></dialog-helper>
  </user-drawer-side-panel>

  </include-fragment>
</deferred-side-panel>
          
        </div>

        <div class="position-absolute mt-2">
            
<site-header-logged-in-user-menu data-catalyst="">

</site-header-logged-in-user-menu>

        </div>
      </div>
    </div>


      <div class="AppHeader-localBar">
        <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/acl2003/Task_1" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /acl2003/Task_1" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected" aria-current="page">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code">Code</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/acl2003/Task_1/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /acl2003/Task_1/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues">Issues</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/acl2003/Task_1/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /acl2003/Task_1/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests">Pull requests</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/acl2003/Task_1/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /acl2003/Task_1/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions">Actions</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/acl2003/Task_1/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /acl2003/Task_1/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects">Projects</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/acl2003/Task_1/security" data-tab-item="i5security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /acl2003/Task_1/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security">Security</span>
          

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/acl2003/Task_1/pulse" data-tab-item="i6insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /acl2003/Task_1/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights">Insights</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="">
  <focus-group direction="vertical" mnemonics="" retain="">
    <button id="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-button" popovertarget="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-overlay" aria-controls="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-list" aria-haspopup="true" aria-labelledby="tooltip-2639c1c9-4f69-4498-a2c9-a3a3f2614c79" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-2639c1c9-4f69-4498-a2c9-a3a3f2614c79" for="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position id="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-overlay" anchor="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone">          <div data-view-component="true">
  <ul aria-labelledby="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-button" id="action-menu-6d943a33-ec84-4b27-a832-5b5f9f2e4e12-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap">
      <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-4af8323b-0b9c-4e9d-af24-46934891440d" href="https://github.com/acl2003/Task_1" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Code
</span></a>
  
  
</li>
      <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-e701a757-978f-4452-9191-34636716781c" href="https://github.com/acl2003/Task_1/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Issues
</span></a>
  
  
</li>
      <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-3e56c222-09aa-463e-8abd-d1838a320d60" href="https://github.com/acl2003/Task_1/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Pull requests
</span></a>
  
  
</li>
      <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-fa53cdb5-c666-422c-b581-6a458f9eb19a" href="https://github.com/acl2003/Task_1/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Actions
</span></a>
  
  
</li>
      <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-2794d6eb-8efe-46e4-8dbc-6c6b63d900ac" href="https://github.com/acl2003/Task_1/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Projects
</span></a>
  
  
</li>
      <li hidden="" data-menu-item="i5security-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-43aec909-d220-4a10-aabe-c481d8c716c4" href="https://github.com/acl2003/Task_1/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Security
</span></a>
  
  
</li>
      <li hidden="" data-menu-item="i6insights-tab" data-targets="action-list.items action-list.items" role="none" data-view-component="true" class="ActionListItem">
    
    <a tabindex="-1" id="item-bda97d59-9010-4f66-8701-35ffc3bf2df7" href="https://github.com/acl2003/Task_1/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label">
          Insights
</span></a>
  
  
</li>
</ul>  
</div>

</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>
      </div>
</header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full mb-3">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/acl2003/Task_1/blob/main/src/components/Events/index.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/acl2003/Task_1/blob/main/src/components/Events/index.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/acl2003/Task_1/blob/main/src/components/Events/index.js">Reload</a> to refresh your session.</span>

    <button id="icon-button-f426d51c-9e02-4b57-b6f8-d022cca06b9d" aria-labelledby="tooltip-b94378e9-9eb2-4b2e-a5bf-bf649b79e0f3" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-b94378e9-9eb2-4b2e-a5bf-bf649b79e0f3" for="icon-button-f426d51c-9e02-4b57-b6f8-d022cca06b9d" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" data-turbo-replace="">





  <template class="js-flash-template"></template>
</div>


    
    <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTU3MTk0MDQ2IiwidCI6MTcwODAwMTA2OX0=--6e714dc7c1e453a957798c9b65dc31387e91c0cf61bbd239c7284479110024b9" data-view-component="true" class="js-socket-channel" data-refresh-delay="500" data-catalyst=""></notification-shelf-watcher>
  <div hidden="" data-initial="" data-target="notification-shelf-watcher.placeholder"></div>






      <details class="details-reset details-overlay details-overlay-dark js-command-palette-dialog" id="command-palette-pjax-container" data-turbo-replace="">
  <summary aria-label="Command palette trigger" tabindex="-1" role="button"></summary>
  <details-dialog class="command-palette-details-dialog d-flex flex-column flex-justify-center height-fit" aria-label="Command palette" role="dialog" aria-modal="true">
    <command-palette class="command-palette color-bg-default rounded-3 border color-shadow-small" return-to="/acl2003/Task_1/tree/main/src" user-id="157194046" activation-hotkey="Mod+k,Mod+Alt+k" command-mode-hotkey="Mod+Shift+K" data-action="
        command-palette-input-ready:command-palette#inputReady
        command-palette-page-stack-updated:command-palette#updateInputScope
        itemsUpdated:command-palette#itemsUpdated
        keydown:command-palette#onKeydown
        loadingStateChanged:command-palette#loadingStateChanged
        selectedItemChanged:command-palette#selectedItemChanged
        pageFetchError:command-palette#pageFetchError
      " data-catalyst="">

        <command-palette-mode data-char="#" data-scope-types="[&quot;&quot;]" data-placeholder="Search issues and pull requests" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="#" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-placeholder="Search issues, pull requests, discussions, and projects" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="!" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-placeholder="Search projects" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="@" data-scope-types="[&quot;&quot;]" data-placeholder="Search or jump to a user, organization, or repository" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="@" data-scope-types="[&quot;owner&quot;]" data-placeholder="Search or jump to a repository" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="/" data-scope-types="[&quot;repository&quot;]" data-placeholder="Search files" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="?" data-placeholder="" data-catalyst="" data-scope-types=""></command-palette-mode>
        <command-palette-mode data-char="&gt;" data-placeholder="Run a command" data-scope-types="" data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="" data-scope-types="[&quot;&quot;]" data-placeholder="Search or jump to..." data-catalyst=""></command-palette-mode>
        <command-palette-mode data-char="" data-scope-types="[&quot;owner&quot;]" data-placeholder="Search or jump to..." data-catalyst=""></command-palette-mode>
      <command-palette-mode class="js-command-palette-default-mode" data-char="" data-placeholder="Search or jump to..." data-scope-types="" data-catalyst=""></command-palette-mode>

      <command-palette-input placeholder="Search or jump to..." data-action="
          command-palette-input:command-palette#onInput
          command-palette-select:command-palette#onSelect
          command-palette-descope:command-palette#onDescope
          command-palette-cleared:command-palette#onInputClear
        " data-catalyst="" class="d-flex flex-items-center flex-nowrap py-1 pl-3 pr-2 border-bottom">
        <div class="js-search-icon d-flex flex-items-center mr-2" style="height: 26px">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search color-fg-muted">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
        </div>
        <div class="js-spinner d-flex flex-items-center mr-2 color-fg-muted" hidden="">
          <svg aria-label="Loading" class="anim-rotate" viewBox="0 0 16 16" fill="none" width="16" height="16">
            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke"></circle>
            <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
        <command-palette-scope data-catalyst="" class="d-inline-flex">
          <div data-target="command-palette-scope.placeholder" hidden="" class="color-fg-subtle">/&nbsp;&nbsp;<span class="text-semibold color-fg-default">...</span>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <command-palette-token data-text="acl2003" data-id="U_kgDOCW4CaA" data-type="owner" data-value="acl2003" data-targets="command-palette-scope.tokens" class="color-fg-default text-semibold" style="white-space:nowrap;line-height:20px;" id="" data-catalyst="">acl2003<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
              <command-palette-token data-text="Task_1" data-id="R_kgDOLL6MBg" data-type="repository" data-value="Task_1" data-targets="command-palette-scope.tokens" class="color-fg-default text-semibold" style="white-space:nowrap;line-height:20px;" id="" data-catalyst="">Task_1<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span></command-palette-token>
        </command-palette-scope>
        <div class="command-palette-input-group flex-1 form-control border-0 box-shadow-none" style="z-index: 0">
          <div class="command-palette-typeahead position-absolute d-flex flex-items-center Truncate">
            <span class="typeahead-segment input-mirror" data-target="command-palette-input.mirror"></span>
            <span class="Truncate-text" data-target="command-palette-input.typeaheadText"></span>
            <span class="typeahead-segment" data-target="command-palette-input.typeaheadPlaceholder"></span>
          </div>
          <input class="js-overlay-input typeahead-input d-none" disabled="" tabindex="-1" aria-label="Hidden input for typeahead">
          <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="js-input typeahead-input form-control border-0 box-shadow-none input-block width-full no-focus-indicator" aria-label="Command palette input" aria-haspopup="listbox" aria-expanded="false" aria-autocomplete="list" aria-controls="command-palette-page-stack" role="combobox" data-action="
              input:command-palette-input#onInput
              keydown:command-palette-input#onKeydown
            " placeholder="Search or jump to...">
        </div>
          <div data-view-component="true" class="position-relative d-inline-block">
    <button aria-keyshortcuts="Control+Backspace" data-action="click:command-palette-input#onClear keypress:command-palette-input#onClear" data-target="command-palette-input.clearButton" id="command-palette-clear-button" hidden="hidden" type="button" data-view-component="true" class="btn-octicon command-palette-input-clear-button" aria-labelledby="tooltip-3c619b55-dd39-4ce2-880f-b8ec97c41543">      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>    <tool-tip id="tooltip-3c619b55-dd39-4ce2-880f-b8ec97c41543" for="command-palette-clear-button" popover="manual" data-direction="w" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip"><template shadowrootmode="open"><style>
      :host {
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--fgColor-onEmphasis, var(--color-fg-on-emphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tool-tip-position-top, 0) auto auto var(--tool-tip-position-left, 0) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host:before{
        position: absolute;
        z-index: 1000001;
        color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
        content: "";
        border: 6px solid transparent;
        opacity: 0;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: 12px;
        content: "";
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open),
      :host(.\:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        animation-delay: .4s;
      }

      :host(.tooltip-s):before,
      :host(.tooltip-n):before {
        right: 50%;
        margin-right: -6px;
      }
      :host(.tooltip-s):before,
      :host(.tooltip-se):before,
      :host(.tooltip-sw):before {
        bottom: 100%;
        border-bottom-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }
      :host(.tooltip-n):before,
      :host(.tooltip-ne):before,
      :host(.tooltip-nw):before {
        top: 100%;
        border-top-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }
      :host(.tooltip-se):before,
      :host(.tooltip-ne):before {
        left: 0;
        margin-left: 6px;
      }
      :host(.tooltip-sw):before,
      :host(.tooltip-nw):before {
        right: 0;
        margin-right: 6px;
      }
      :host(.tooltip-w):before {
        top: 50%;
        bottom: 50%;
        left: 100%;
        margin-top: -6px;
        border-left-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }
      :host(.tooltip-e):before {
        top: 50%;
        right: 100%;
        bottom: 50%;
        margin-top: -6px;
        border-right-color: var(--bgColor-emphasis, var(--color-neutral-emphasis-plus));
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Clear Command Palette</tool-tip>
</div>
      </command-palette-input>

      <command-palette-page-stack data-default-scope-id="R_kgDOLL6MBg" data-default-scope-type="Repository" data-action="command-palette-page-octicons-cached:command-palette-page-stack#cacheOcticons" data-current-mode="" data-catalyst="" data-target="command-palette.pageStack" data-current-query-text="">
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">#</kbd> to search discussions
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">!</kbd> to search projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;owner&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">@</kbd> to search teams
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">@</kbd> to search people and organizations
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type <kbd class="hx_kbd">&gt;</kbd> to activate command mode
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Go to your accessibility settings to change your keyboard shortcuts
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="#" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type author:@me to search your content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="#" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:pr to filter to pull requests
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="#" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:issue to filter to issues
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-mode="#" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:project to filter to projects
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
          <command-palette-tip class="color-fg-muted f6 px-3 py-1 my-2" data-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-mode="#" data-value="" data-match-mode="" data-catalyst="" hidden="">
            <div class="d-flex flex-items-start flex-justify-between">
              <div>
                <span class="text-bold">Tip:</span>
                  Type is:open to filter to open content
              </div>
              <div class="ml-2 flex-shrink-0">
                Type <kbd class="hx_kbd">?</kbd> for help and tips
              </div>
            </div>
          </command-palette-tip>
        <command-palette-tip class="mx-3 my-2 flash flash-error d-flex flex-items-center" data-scope-types="*" data-on-error="" data-mode="*" data-catalyst="" hidden="" data-match-mode="" data-value="*">
          <div>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
          </div>
          <div class="px-2">
            We’ve encountered an error and some results aren't available at this time. Type a new search or try again later.
          </div>
        </command-palette-tip>
        <command-palette-tip class="h4 color-fg-default pl-3 pb-2 pt-3" data-on-empty="" data-scope-types="*" data-match-mode="[^?]|^$" data-mode="*" data-catalyst="" hidden="" data-value="*">
          No results matched your search
        </command-palette-tip>

        <div hidden="">

            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="arrow-right-color-fg-muted">
              <svg height="16" class="octicon octicon-arrow-right color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="arrow-right-color-fg-default">
              <svg height="16" class="octicon octicon-arrow-right color-fg-default" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="codespaces-color-fg-muted">
              <svg height="16" class="octicon octicon-codespaces color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="copy-color-fg-muted">
              <svg height="16" class="octicon octicon-copy color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="dash-color-fg-muted">
              <svg height="16" class="octicon octicon-dash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M2 7.75A.75.75 0 0 1 2.75 7h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2 7.75Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="file-color-fg-muted">
              <svg height="16" class="octicon octicon-file color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="gear-color-fg-muted">
              <svg height="16" class="octicon octicon-gear color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="lock-color-fg-muted">
              <svg height="16" class="octicon octicon-lock color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="moon-color-fg-muted">
              <svg height="16" class="octicon octicon-moon color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="person-color-fg-muted">
              <svg height="16" class="octicon octicon-person color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="pencil-color-fg-muted">
              <svg height="16" class="octicon octicon-pencil color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="issue-opened-open">
              <svg height="16" class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="git-pull-request-draft-color-fg-muted">
              <svg height="16" class="octicon octicon-git-pull-request-draft color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="search-color-fg-muted">
              <svg height="16" class="octicon octicon-search color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="sun-color-fg-muted">
              <svg height="16" class="octicon octicon-sun color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.06a.75.75 0 0 1 1.06 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-8 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Zm3.536-1.464a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.343 2.343a.75.75 0 0 1 1.061 0l1.06 1.061a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018l-1.06-1.06a.75.75 0 0 1 0-1.06Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="sync-color-fg-muted">
              <svg height="16" class="octicon octicon-sync color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="trash-color-fg-muted">
              <svg height="16" class="octicon octicon-trash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="key-color-fg-muted">
              <svg height="16" class="octicon octicon-key color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M10.5 0a5.499 5.499 0 1 1-1.288 10.848l-.932.932a.749.749 0 0 1-.53.22H7v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22H5v.75a.749.749 0 0 1-.22.53l-.5.5a.749.749 0 0 1-.53.22h-2A1.75 1.75 0 0 1 0 14.25v-2c0-.199.079-.389.22-.53l4.932-4.932A5.5 5.5 0 0 1 10.5 0Zm-4 5.5c-.001.431.069.86.205 1.269a.75.75 0 0 1-.181.768L1.5 12.56v1.69c0 .138.112.25.25.25h1.69l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l.06-.06v-1.19a.75.75 0 0 1 .75-.75h1.19l1.023-1.025a.75.75 0 0 1 .768-.18A4 4 0 1 0 6.5 5.5ZM11 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="comment-discussion-color-fg-muted">
              <svg height="16" class="octicon octicon-comment-discussion color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="bell-color-fg-muted">
              <svg height="16" class="octicon octicon-bell color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="bell-slash-color-fg-muted">
              <svg height="16" class="octicon octicon-bell-slash color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="m4.182 4.31.016.011 10.104 7.316.013.01 1.375.996a.75.75 0 1 1-.88 1.214L13.626 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947V5.305L.31 3.357a.75.75 0 1 1 .88-1.214Zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01c0 .005.002.009.005.012l.006.004.007.001ZM8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 1 1 4.38 1.55 5 5 0 0 1 13 5v2.373a.75.75 0 0 1-1.5 0V5A3.5 3.5 0 0 0 8 1.5ZM8 16a2 2 0 0 1-1.985-1.75c-.017-.137.097-.25.235-.25h3.5c.138 0 .252.113.235.25A2 2 0 0 1 8 16Z"></path></svg>
            </div>
            <div data-targets="command-palette-page-stack.localOcticons" data-octicon-id="paintbrush-color-fg-muted">
              <svg height="16" class="octicon octicon-paintbrush color-fg-muted" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path d="M11.134 1.535c.7-.509 1.416-.942 2.076-1.155.649-.21 1.463-.267 2.069.34.603.601.568 1.411.368 2.07-.202.668-.624 1.39-1.125 2.096-1.011 1.424-2.496 2.987-3.775 4.249-1.098 1.084-2.132 1.839-3.04 2.3a3.744 3.744 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861-.614.177-1.294.287-1.914.357A21.151 21.151 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008-.742.007v-.054a21.25 21.25 0 0 1 .13-2.284c.067-.647.187-1.287.358-1.914.17-.591.43-1.226.86-1.657a3.746 3.746 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982 1.271-1.255 2.833-2.75 4.245-3.777ZM1.62 13.089c-.051.464-.086.929-.104 1.395.466-.018.932-.053 1.396-.104a10.511 10.511 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 0 0-.309 1.67Zm10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027-.432.14-.995.462-1.655.942Zm-4.832 7.266-.001.001a9.859 9.859 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192Z"></path></svg>
            </div>

            <command-palette-item-group data-group-id="top" data-group-title="Top result" data-group-hint="" data-group-limits="{}" data-default-priority="0" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Top result
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Top result results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="commands" data-group-title="Commands" data-group-hint="Type &gt; to filter" data-group-limits="{&quot;static_items_page&quot;:50,&quot;issue&quot;:50,&quot;pull_request&quot;:50,&quot;discussion&quot;:50}" data-default-priority="1" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Commands
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              Type &gt; to filter
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Commands results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="global_commands" data-group-title="Global Commands" data-group-hint="Type &gt; to filter" data-group-limits="{&quot;issue&quot;:0,&quot;pull_request&quot;:0,&quot;discussion&quot;:0}" data-default-priority="2" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Global Commands
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              Type &gt; to filter
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Global Commands results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="this_page" data-group-title="This Page" data-group-hint="" data-group-limits="{}" data-default-priority="3" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              This Page
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="This Page results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="files" data-group-title="Files" data-group-hint="" data-group-limits="{}" data-default-priority="4" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Files
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Files results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="default" data-group-title="Default" data-group-hint="" data-group-limits="{&quot;static_items_page&quot;:50}" data-default-priority="5" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Default results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="pages" data-group-title="Pages" data-group-hint="" data-group-limits="{&quot;repository&quot;:10}" data-default-priority="6" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Pages
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Pages results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="access_policies" data-group-title="Access Policies" data-group-hint="" data-group-limits="{}" data-default-priority="7" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Access Policies
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Access Policies results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="organizations" data-group-title="Organizations" data-group-hint="" data-group-limits="{}" data-default-priority="8" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Organizations
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Organizations results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="repositories" data-group-title="Repositories" data-group-hint="" data-group-limits="{}" data-default-priority="9" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Repositories
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Repositories results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="references" data-group-title="Issues, pull requests, and discussions" data-group-hint="Type # to filter" data-group-limits="{}" data-default-priority="10" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Issues, pull requests, and discussions
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              Type # to filter
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Issues, pull requests, and discussions results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="teams" data-group-title="Teams" data-group-hint="" data-group-limits="{}" data-default-priority="11" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Teams
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Teams results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="users" data-group-title="Users" data-group-hint="" data-group-limits="{}" data-default-priority="12" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Users
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Users results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="memex_projects" data-group-title="Projects" data-group-hint="" data-group-limits="{}" data-default-priority="13" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Projects
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Projects results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="projects" data-group-title="Projects (classic)" data-group-hint="" data-group-limits="{}" data-default-priority="14" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Projects (classic)
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Projects (classic) results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="footer" data-group-title="Footer" data-group-hint="" data-group-limits="{}" data-default-priority="15" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Footer results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="modes_help" data-group-title="Modes" data-group-hint="" data-group-limits="{}" data-default-priority="16" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Modes
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Modes results"></div>
        </command-palette-item-group>
            <command-palette-item-group data-group-id="filters_help" data-group-title="Use filters in issues, pull requests, discussions, and projects" data-group-hint="" data-group-limits="{}" data-default-priority="17" data-catalyst="" class="py-2 border-top" hidden="true" data-skip-template="">
            
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              Use filters in issues, pull requests, discussions, and projects
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              
            </span>
          </div>
          <div role="listbox" class="list-style-none" data-target="command-palette-item-group.list" aria-label="Use filters in issues, pull requests, discussions, and projects results"></div>
        </command-palette-item-group>

            <command-palette-page data-page-title="acl2003" data-scope-id="U_kgDOCW4CaA" data-scope-type="owner" data-targets="command-palette-page-stack.defaultPages" hidden="" data-catalyst="" class="rounded-bottom-2 page-stack-transition-height" style="max-height:400px;">
            </command-palette-page>
            <command-palette-page data-page-title="Task_1" data-scope-id="R_kgDOLL6MBg" data-scope-type="repository" data-targets="command-palette-page-stack.defaultPages" hidden="" data-catalyst="" class="rounded-bottom-2 page-stack-transition-height" style="max-height:400px;">
            </command-palette-page>
        </div>

        <command-palette-page data-is-root="" hidden="" data-page-title="" data-catalyst="" class="rounded-bottom-2 page-stack-transition-height" data-targets="command-palette-page-stack.pages" style="max-height:400px;" data-scope-id="" data-scope-type="">
        </command-palette-page>
          <command-palette-page data-page-title="acl2003" data-scope-id="U_kgDOCW4CaA" data-scope-type="owner" hidden="" data-catalyst="" class="rounded-bottom-2 page-stack-transition-height" data-targets="command-palette-page-stack.pages" style="max-height:400px;">
          </command-palette-page>
          <command-palette-page data-page-title="Task_1" data-scope-id="R_kgDOLL6MBg" data-scope-type="repository" hidden="" data-catalyst="" class="rounded-bottom-2 page-stack-transition-height" data-targets="command-palette-page-stack.pages" style="max-height:400px;">
          </command-palette-page>
      </command-palette-page-stack>

      <server-defined-provider data-type="search-links" data-targets="command-palette.serverDefinedProviderElements" data-supported-modes="" data-catalyst="" data-fetch-debounce="" data-supported-scope-types="" data-src="" data-supports-commands=""></server-defined-provider>
      <server-defined-provider data-type="help" data-targets="command-palette.serverDefinedProviderElements" data-supported-modes="" data-catalyst="" data-fetch-debounce="" data-supported-scope-types="" data-src="" data-supports-commands="">
          <command-palette-help data-group="modes_help" data-prefix="#" data-scope-types="[&quot;&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search for <strong>issues</strong> and <strong>pull requests</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="modes_help" data-prefix="#" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search for <strong>issues, pull requests, discussions,</strong> and <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">#</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="modes_help" data-prefix="@" data-scope-types="[&quot;&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search for <strong>organizations, repositories,</strong> and <strong>users</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">@</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="modes_help" data-prefix="!" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search for <strong>projects</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">!</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="modes_help" data-prefix="/" data-scope-types="[&quot;repository&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search for <strong>files</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">/</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="modes_help" data-prefix="&gt;" data-scope-types="" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Activate <strong>command mode</strong></span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd">&gt;</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# author:@me" data-scope-types="" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# author:@me" data-scope-types="" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Search your issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># author:@me</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# is:pr" data-scope-types="" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Filter to pull requests</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:pr</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# is:issue" data-scope-types="" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Filter to issues</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:issue</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# is:discussion" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Filter to discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:discussion</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# is:project" data-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Filter to projects</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:project</kbd>
              </span>
          </command-palette-help>
          <command-palette-help data-group="filters_help" data-prefix="# is:open" data-scope-types="" data-catalyst="" hidden="">
            <span data-target="command-palette-help.titleElement">Filter to open issues, pull requests, and discussions</span>
              <span data-target="command-palette-help.hintElement">
                <kbd class="hx_kbd"># is:open</kbd>
              </span>
          </command-palette-help>
      </server-defined-provider>

        <server-defined-provider data-type="commands" data-fetch-debounce="0" data-src="/command_palette/commands" data-supported-modes="[]" data-supports-commands="" data-targets="command-palette.serverDefinedProviderElements" data-supported-scope-types="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="prefetched" data-fetch-debounce="0" data-src="/command_palette/jump_to_page_navigation" data-supported-modes="[&quot;&quot;]" data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;,&quot;repository&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/issues" data-supported-modes="[&quot;#&quot;,&quot;#&quot;]" data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/jump_to" data-supported-modes="[&quot;@&quot;,&quot;@&quot;]" data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/jump_to_members_only" data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]" data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="prefetched" data-fetch-debounce="0" data-src="/command_palette/jump_to_members_only_prefetched" data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]" data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="files" data-fetch-debounce="0" data-src="/command_palette/files" data-supported-modes="[&quot;/&quot;]" data-supported-scope-types="[&quot;repository&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/discussions" data-supported-modes="[&quot;#&quot;]" data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/projects" data-supported-modes="[&quot;#&quot;,&quot;!&quot;]" data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="prefetched" data-fetch-debounce="0" data-src="/command_palette/recent_issues" data-supported-modes="[&quot;#&quot;,&quot;#&quot;]" data-supported-scope-types="[&quot;owner&quot;,&quot;repository&quot;,&quot;&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/teams" data-supported-modes="[&quot;@&quot;,&quot;&quot;]" data-supported-scope-types="[&quot;owner&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
        <server-defined-provider data-type="remote" data-fetch-debounce="200" data-src="/command_palette/name_with_owner_repository" data-supported-modes="[&quot;@&quot;,&quot;@&quot;,&quot;&quot;,&quot;&quot;]" data-supported-scope-types="[&quot;&quot;,&quot;owner&quot;]" data-targets="command-palette.serverDefinedProviderElements" data-supports-commands="" data-catalyst=""></server-defined-provider>
    <client-defined-provider data-catalyst="" data-provider-id="main-window-commands-provider" data-targets="command-palette.clientDefinedProviderElements"></client-defined-provider></command-palette>
  </details-dialog>
</details>

<div class="position-fixed bottom-0 left-0 ml-5 mb-5 js-command-palette-toasts" style="z-index: 1000">
  <div hidden="" class="Toast Toast--loading">
    <span class="Toast-icon">
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
        <path fill="#959da5" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"></path>
        <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
      </svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden="" class="anim-fade-in fast Toast Toast--error">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-stop">
    <path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden="" class="anim-fade-in fast Toast Toast--warning">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>


  <div hidden="" class="anim-fade-in fast Toast Toast--success">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>

  <div hidden="" class="anim-fade-in fast Toast">
    <span class="Toast-icon">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-info">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
</svg>
    </span>
    <span class="Toast-content"></span>
  </div>
</div>


  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      






    
  <div id="repository-container-header" data-turbo-replace="" hidden=""></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Mod+Alt+.">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Mod+Alt+," target="_blank" href="https://github.com/codespaces/new/acl2003/Task_1/tree/main?resume=1">Open in codespace</a>



    
      
    





<react-app app-name="react-code-view" initial-path="/acl2003/Task_1/tree/main/src" style="min-height: calc(100vh - 64px)" data-ssr="true" data-lazy="false" data-alternate="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"path":"src","repo":{"id":750685190,"defaultBranch":"main","name":"Task_1","ownerLogin":"acl2003","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2024-01-31T11:03:58.000+05:30","ownerAvatar":"https://avatars.githubusercontent.com/u/158204520?v=4","public":true,"private":false,"isOrgOwned":false},"currentUser":{"id":157194046,"login":"sravan321-hub","userEmail":"sravanreddy.01234@gmail.com"},"refInfo":{"name":"main","listCacheKey":"v0:1706679584.0","canEdit":true,"refType":"branch","currentOid":"e7a3d9251335e5de1712583c823c4c0d25bd2d2d"},"tree":{"items":[{"name":"components","path":"src/components","contentType":"directory"},{"name":"App.css","path":"src/App.css","contentType":"file"},{"name":"App.js","path":"src/App.js","contentType":"file"},{"name":"App.test.js","path":"src/App.test.js","contentType":"file"},{"name":"index.css","path":"src/index.css","contentType":"file"},{"name":"index.js","path":"src/index.js","contentType":"file"},{"name":"logo.svg","path":"src/logo.svg","contentType":"file"},{"name":"reportWebVitals.js","path":"src/reportWebVitals.js","contentType":"file"},{"name":"setupTests.js","path":"src/setupTests.js","contentType":"file"}],"templateDirectorySuggestionUrl":null,"readme":null,"totalCount":9,"showBranchInfobar":false},"fileTree":{"":{"items":[{"name":"public","path":"public","contentType":"directory"},{"name":"src","path":"src","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"}],"totalCount":6}},"fileTreeProcessingTime":1.509895,"foldersToFetch":[],"treeExpanded":true,"symbolsExpanded":false,"csrf_tokens":{"/acl2003/Task_1/branches":{"post":"jYLPZtkR-9YRi3JDGIRZlWmgxwipX3BTVIymnCqki0BSnph3-RFPl5cvgPtiPAOehObwjVtOnq-FKP4hCfjkHw"},"/acl2003/Task_1/branches/fetch_and_merge/main":{"post":"hd7aww9PqSHkm4LB3-7rPsxkaFVId3l6x4TL3axT6SEjzeCMeqQGupLIRj2xraAMT98rKgK5uFFmh-ZHyR8OYA"},"/acl2003/Task_1/branches/fetch_and_merge/main?discard_changes=true":{"post":"3LexD7NjZK6DfEl2gveySL12n97uhTZspZT3KbaLUaB6pItAxojLNfUvjYrstPl6Ps3coaRL90cEl9qz08e24Q"}}},"title":"Task_1/src at main · acl2003/Task_1","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-32bb159cc57c.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-c6704d501c10.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"copilot_conversational_ux":false,"copilot_conversational_ux_embedding_update":false,"copilot_popover_file_editor_header":true,"copilot_smell_icebreaker_ux":false,"copilot_workspace":false}}}</script>
  <div data-target="react-app.reactRoot"><meta data-hydrostats="publish"> <!-- --> <!-- --> <!-- --> <button hidden="" data-testid="header-permalink-button" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="y,Shift+Y"></button><button hidden="" data-hotkey="y,Shift+Y"></button><div class="Box-sc-g0xbh4-0"><div style="--sticky-pane-height: calc(100vh - (max(0px, 0px)));" class="Box-sc-g0xbh4-0 fSWWem"><div class="Box-sc-g0xbh4-0 kPPmzM"><div class="Box-sc-g0xbh4-0 cIAPDV"><div tabindex="0" class="Box-sc-g0xbh4-0 gvCnwW"><div class="Box-sc-g0xbh4-0 xEgty"><div class="Box-sc-g0xbh4-0 eUyHuk"></div><div style="--pane-width:320px" class="Box-sc-g0xbh4-0 gNdDUH"><div class="Box-sc-g0xbh4-0"><div id="repos-file-tree" class="Box-sc-g0xbh4-0 jyDQiw"><div class="Box-sc-g0xbh4-0 hBSSUC"><div class="Box-sc-g0xbh4-0 iPurHz"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 fNPcqd"><span role="tooltip" aria-label="Collapse file tree" id="expand-button-file-tree-button" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-se"><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-labelledby="expand-button-file-tree-button" aria-expanded="true" aria-controls="repos-file-tree" class="types__StyledButton-sc-ws60qy-0 dWnuhe" data-no-visuals="true" data-hotkey="Control+b"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button></span><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+b"></button></h2><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 imcwCi">Files</h2></div><div class="Box-sc-g0xbh4-0 hVHHYa"><div class="Box-sc-g0xbh4-0 idZfsJ"><button type="button" id="branch-picker-repos-header-ref-selector" aria-haspopup="true" tabindex="0" aria-label="main branch" data-testid="anchor-button" class="types__StyledButton-sc-ws60qy-0 eBOWAw react-repos-tree-pane-ref-selector width-full ref-selector-class" data-hotkey="w"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text"><div class="Box-sc-g0xbh4-0 bKgizp"><div class="Box-sc-g0xbh4-0 iPGYsi"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 caeYDk ref-selector-button-text-container"><span class="Text-sc-17v1xeu-0 bOMzPg">&nbsp;<!-- -->main</span></div></div></span><span data-component="trailingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="w"></button></div><div class="Box-sc-g0xbh4-0 jahcnb"><span role="tooltip" aria-label="Add file" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-s"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Add file" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 dHiXw" href="https://github.com/acl2003/Task_1/new/main/src/components/Events"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-plus" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg></a></span><button data-component="IconButton" type="button" aria-label="Search this repository" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 UfKBS" data-hotkey="/"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="/"></button></div></div></div><div class="Box-sc-g0xbh4-0 jRttMj"><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="t,Shift+T"></button><button hidden="" data-hotkey="t,Shift+T"></button><span class="TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0 TextInputWrapper-sc-1mqhpbi-1 frxNoc jbzqwE TextInput-wrapper" aria-busy="false"><span class="TextInput-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Go to file" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Go to file" data-component="input" class="UnstyledTextInput-sc-14ypya-0 cDLBls" value=""><span class="TextInput-icon"><div class="Box-sc-g0xbh4-0 cNvKlH"><kbd>t</kbd></div></span></span></div><div class="Box-sc-g0xbh4-0 duPwcy"></div><div class="Box-sc-g0xbh4-0 bYLCoz"><div><div class="react-tree-show-tree-items"><div data-testid="repos-file-tree-container" class="Box-sc-g0xbh4-0 erWCJP"><nav aria-label="File Tree Navigation"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 rTZSs"></span><ul role="tree" aria-label="Files" class="TreeView__UlBox-sc-4ex6b6-0 TIGQC"><li class="PRIVATE_TreeView-item" tabindex="-1" id="public-item" role="treeitem" aria-labelledby=":r1:" aria-describedby=":r2: :r3:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r1:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r2:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>public</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src-item" role="treeitem" aria-labelledby=":r4:" aria-describedby=":r5: :r6:" aria-level="1" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r4:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>src</span></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components-item" role="treeitem" aria-labelledby=":r7:" aria-describedby=":r8: :r9:" aria-level="2" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r7:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r8:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>components</span></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Desktop-item" role="treeitem" aria-labelledby=":r1e:" aria-describedby=":r1f: :r1g:" aria-level="3" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 3; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r1e:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1f:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>Desktop</span></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Desktop/index.css-item" role="treeitem" aria-labelledby=":r2j:" aria-describedby=":r2k: :r2l:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r2j:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r2k:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Desktop/index.js-item" role="treeitem" aria-labelledby=":r2m:" aria-describedby=":r2n: :r2o:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r2m:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r2n:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.js</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/EventItem-item" role="treeitem" aria-labelledby=":r1h:" aria-describedby=":r1i: :r1j:" aria-level="3" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 3; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r1h:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1i:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>EventItem</span></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/EventItem/index.css-item" role="treeitem" aria-labelledby=":r1t:" aria-describedby=":r1u: :r1v:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r1t:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1u:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/EventItem/index.js-item" role="treeitem" aria-labelledby=":r20:" aria-describedby=":r21: :r22:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r20:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r21:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.js</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="0" id="src/components/Events-item" role="treeitem" aria-labelledby=":r1k:" aria-describedby=":r1l: :r1m:" aria-level="3" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 3; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r1k:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1l:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-open-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>Events</span></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Events/Date_range_fill.jpg-item" role="treeitem" aria-labelledby=":r2p:" aria-describedby=":r2q: :r2r:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r2p:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r2q:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>Date_range_fill.jpg</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Events/columns.jpg-item" role="treeitem" aria-labelledby=":r2s:" aria-describedby=":r2t: :r2u:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r2s:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r2t:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>columns.jpg</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Events/index.css-item" role="treeitem" aria-labelledby=":r2v:" aria-describedby=":r30: :r31:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r2v:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r30:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Events/index.js-item" role="treeitem" aria-labelledby=":r32:" aria-describedby=":r33: :r34:" aria-level="4" aria-selected="false" aria-current="true"><div class="PRIVATE_TreeView-item-container" style="--level: 4;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r32:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r33:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Events/search.jpg-item" role="treeitem" aria-labelledby=":r35:" aria-describedby=":r36: :r37:" aria-level="4" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 4; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r35:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r36:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>search.jpg</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Navbar-item" role="treeitem" aria-labelledby=":r1n:" aria-describedby=":r1o: :r1p:" aria-level="3" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 3; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r1n:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1o:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>Navbar</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/components/Topbar-item" role="treeitem" aria-labelledby=":r1q:" aria-describedby=":r1r: :r1s:" aria-level="3" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 3; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r1q:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1r:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span>Topbar</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/App.css-item" role="treeitem" aria-labelledby=":ra:" aria-describedby=":rb: :rc:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":ra:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rb:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>App.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/App.js-item" role="treeitem" aria-labelledby=":rd:" aria-describedby=":re: :rf:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rd:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":re:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>App.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/App.test.js-item" role="treeitem" aria-labelledby=":rg:" aria-describedby=":rh: :ri:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rg:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rh:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>App.test.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/index.css-item" role="treeitem" aria-labelledby=":rj:" aria-describedby=":rk: :rl:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rj:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rk:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.css</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/index.js-item" role="treeitem" aria-labelledby=":rm:" aria-describedby=":rn: :ro:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rm:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rn:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>index.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/logo.svg-item" role="treeitem" aria-labelledby=":rp:" aria-describedby=":rq: :rr:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rp:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rq:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>logo.svg</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/reportWebVitals.js-item" role="treeitem" aria-labelledby=":rs:" aria-describedby=":rt: :ru:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rs:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":rt:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>reportWebVitals.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="src/setupTests.js-item" role="treeitem" aria-labelledby=":rv:" aria-describedby=":r10: :r11:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":rv:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r10:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>setupTests.js</span></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="-1" id=".gitignore-item" role="treeitem" aria-labelledby=":r12:" aria-describedby=":r13: :r14:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r12:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r13:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>.gitignore</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="README.md-item" role="treeitem" aria-labelledby=":r15:" aria-describedby=":r16: :r17:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r15:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r16:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>README.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="package-lock.json-item" role="treeitem" aria-labelledby=":r18:" aria-describedby=":r19: :r1a:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r18:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r19:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>package-lock.json</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="package.json-item" role="treeitem" aria-labelledby=":r1b:" aria-describedby=":r1c: :r1d:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r1b:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r1c:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span>package.json</span></span></div></div></li></ul></nav></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 gMNHHu"><div role="slider" aria-label="Draggable pane splitter" aria-valuemin="256" aria-valuemax="321" aria-valuenow="320" aria-valuetext="Pane width 320 pixels" tabindex="0" class="Box-sc-g0xbh4-0 UHyNo"></div></div></div></div><div class="Box-sc-g0xbh4-0 emFMJu"><div class="Box-sc-g0xbh4-0"></div><div class="Box-sc-g0xbh4-0 hlUAHL"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-g0xbh4-0 iStsmI"><div class="Box-sc-g0xbh4-0 eIgvIk"><div class="Box-sc-g0xbh4-0 eVFfWF container"><div class="Box-sc-g0xbh4-0 kgXdnT react-code-view-header--narrow"><div class="Box-sc-g0xbh4-0 kzTa-dF"><div class="Box-sc-g0xbh4-0 bbXCl"><div class="Box-sc-g0xbh4-0 kIpapQ"><div class="Box-sc-g0xbh4-0 eTvGbF"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb-mobile-heading" id="repos-header-breadcrumb-mobile" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="repos-header-breadcrumb-mobile-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 ipyMWB" href="https://github.com/acl2003/Task_1/tree/main">Task_1</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src">src</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src/components">components</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src/components/Events">Events</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><h1 tabindex="-1" id="file-name-id-mobile" class="Heading__StyledHeading-sc-1c1dgg0-0 diwsLq">index.js</h1></div><button data-component="IconButton" type="button" aria-label="Copy path" data-testid="breadcrumb-copy-path-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 ivbpoP"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div></div><div class="Box-sc-g0xbh4-0 hGGMNu"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hZiIV"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" class="types__StyledButton-sc-ws60qy-0 jAAONu js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button-nav-menu-narrow" id=":r62:" aria-haspopup="true" tabindex="0" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div></div><div id="StickyHeader" class="Box-sc-g0xbh4-0 bDwCYs react-code-view-header--wide" style="position: sticky;"><div class="Box-sc-g0xbh4-0 fywjmm"><div class="Box-sc-g0xbh4-0 dyczTK"><div class="Box-sc-g0xbh4-0 kszRgZ"><div class="Box-sc-g0xbh4-0 eTvGbF"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb-wide-heading" id="repos-header-breadcrumb-wide" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="repos-header-breadcrumb-wide-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 ipyMWB" href="https://github.com/acl2003/Task_1/tree/main">Task_1</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src">src</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src/components">components</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src/components/Events">Events</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 fIsVJr">/</span><h1 tabindex="-1" id="file-name-id-wide" class="Heading__StyledHeading-sc-1c1dgg0-0 diwsLq">index.js</h1></div><button data-component="IconButton" type="button" aria-label="Copy path" data-testid="breadcrumb-copy-path-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 ivbpoP"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display:inline-block;user-select:none;vertical-align:text-bottom;overflow:visible"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div></div><div class="Box-sc-g0xbh4-0 gtBUEp"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey="l,Shift+L" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey="Mod+Alt+g" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" data-hotkey="b,Shift+B,Control+/ Control+b" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 hZiIV"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Blame</span></span></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><button data-component="IconButton" type="button" aria-label="More file actions" class="types__StyledButton-sc-ws60qy-0 jAAONu js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button-nav-menu-wide" id=":r64:" aria-haspopup="true" tabindex="0" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 hVZtwF react-code-view-bottom-padding"> <div class="Box-sc-g0xbh4-0 cMYnca"></div><div class="Box-sc-g0xbh4-0"></div>   </div><div class="Box-sc-g0xbh4-0 hVZtwF">   <button hidden="" data-testid="" data-hotkey="r,Shift+R" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="r,Shift+R"></button><div class="Box-sc-g0xbh4-0 jQCQnS"><div class="Box-sc-g0xbh4-0 eYedVD"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">Latest commit</h2><div data-testid="latest-commit" class="Box-sc-g0xbh4-0 drtGBr"><div class="Box-sc-g0xbh4-0 eScEiW"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 hLLhje"><a href="https://github.com/acl2003" data-testid="avatar-icon-link" data-hovercard-url="/users/acl2003/hovercard" class="Link__StyledLink-sc-14289xe-0 dheQRw"><img alt="acl2003" size="20" src="./Screen_files/158204520" data-testid="github-avatar" aria-label="acl2003" height="20" width="20" class="Avatar__StyledAvatar-sc-2lv0r8-0 kYMvPL"></a><span role="tooltip" aria-label="commits by acl2003" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-se"><a href="https://github.com/acl2003/Task_1/commits?author=acl2003" aria-label="commits by acl2003" data-hovercard-url="/users/acl2003/hovercard" class="Link__StyledLink-sc-14289xe-0 XuJeD">acl2003</a></span></div><span class="Box-sc-g0xbh4-0"></span></div><div class="Box-sc-g0xbh4-0 fqNQBl react-last-commit-message"><div class="Box-sc-g0xbh4-0 jEKUjt Truncate"><span class="Text-sc-17v1xeu-0 gPDEWA Truncate-text" data-testid="latest-commit-html"><a href="https://github.com/acl2003/Task_1/commit/e7a3d9251335e5de1712583c823c4c0d25bd2d2d" class="Link--secondary" title="first commit" data-pjax="true" data-hovercard-url="/acl2003/Task_1/commit/e7a3d9251335e5de1712583c823c4c0d25bd2d2d/hovercard">first commit</a></span></div></div><span class="Text-sc-17v1xeu-0 bESgln react-last-commit-summary-timestamp"><relative-time class="RelativeTime-sc-lqbqy3-0" datetime="2024-01-31T11:09:28.000+05:30" tense="past" title="Jan 31, 2024, 11:09 AM GMT+5:30"><template shadowrootmode="open">2 weeks ago</template></relative-time></span></div><div class="Box-sc-g0xbh4-0 jGfYmh"><div data-testid="latest-commit-details" class="Box-sc-g0xbh4-0 lhFvfi"><span class="Text-sc-17v1xeu-0 bESgln react-last-commit-oid-timestamp"><a class="Link__StyledLink-sc-14289xe-0 dheQRw Link--secondary" aria-label="Commit e7a3d92" href="https://github.com/acl2003/Task_1/commit/e7a3d9251335e5de1712583c823c4c0d25bd2d2d">e7a3d92</a>&nbsp;·&nbsp;<relative-time class="RelativeTime-sc-lqbqy3-0" datetime="2024-01-31T11:09:28.000+05:30" tense="past" title="Jan 31, 2024, 11:09 AM GMT+5:30"><template shadowrootmode="open">2 weeks ago</template></relative-time></span><span class="Text-sc-17v1xeu-0 bESgln react-last-commit-timestamp"><relative-time class="RelativeTime-sc-lqbqy3-0" datetime="2024-01-31T11:09:28.000+05:30" tense="past" title="Jan 31, 2024, 11:09 AM GMT+5:30"><template shadowrootmode="open">2 weeks ago</template></relative-time></span></div><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">History</h2><a class="types__StyledButton-sc-ws60qy-0 fAkXQN react-last-commit-history-group" href="https://github.com/acl2003/Task_1/commits/main/src/components/Events/index.js" data-size="small"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text"><span class="Text-sc-17v1xeu-0 dALsKK">History</span></span></span></a><div class="Box-sc-g0xbh4-0 bqgLjk"><button data-component="IconButton" type="button" aria-label="Open commit details" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 iGsLPX"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button></div><span role="tooltip" aria-label="Commit history" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-n"><a class="types__StyledButton-sc-ws60qy-0 fAkXQN react-last-commit-history-icon" href="https://github.com/acl2003/Task_1/commits/main/src/components/Events/index.js"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div><div class="Box-sc-g0xbh4-0 iJmJly"><div class="Box-sc-g0xbh4-0 jACbi container"><div class="Box-sc-g0xbh4-0 gIJuDf react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 fleZSW react-code-size-details-banner"><div class="Box-sc-g0xbh4-0 BnySK text-mono"><div title="10.6 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 gPDEWA">205 lines (186 loc) · 10.6 KB</span></div></div></div><div class="Box-sc-g0xbh4-0 react-code-size-details-banner"><button type="button" id=":r66:" aria-haspopup="true" tabindex="0" data-testid="copilot-popover-button" data-size="small" class="types__StyledButton-sc-ws60qy-0 frAFhH" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 VHzRk react-blob-view-header-sticky" id="repos-sticky-header"><div class="Box-sc-g0xbh4-0 ePiodO"><div class="Box-sc-g0xbh4-0 react-blob-sticky-header"><div class="Box-sc-g0xbh4-0 kbVgFY"><div class="Box-sc-g0xbh4-0 gJICKO"><div class="Box-sc-g0xbh4-0 iZJewz"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Box-sc-g0xbh4-0 kzRgrI"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading">Breadcrumbs</h2><ol class="Box-sc-g0xbh4-0 cmAPIB"><li class="Box-sc-g0xbh4-0 jwXCBK"><a sx="[object Object]" data-testid="breadcrumbs-repo-link" class="Link__StyledLink-sc-14289xe-0 ipyMWB" href="https://github.com/acl2003/Task_1/tree/main">Task_1</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 cYjMDB">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src">src</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 cYjMDB">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src/components">components</a></li><li class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 cYjMDB">/</span><a sx="[object Object]" class="Link__StyledLink-sc-14289xe-0 jmkYvv" href="https://github.com/acl2003/Task_1/tree/main/src/components/Events">Events</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 jwXCBK"><span aria-hidden="true" class="Text-sc-17v1xeu-0 cYjMDB">/</span><h1 tabindex="-1" id="sticky-file-name-id" class="Heading__StyledHeading-sc-1c1dgg0-0 jAEDJk">index.js</h1></div></div><button type="button" data-size="small" class="types__StyledButton-sc-ws60qy-0 gfKkfV" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z"></path></svg></span><span data-component="text">Top</span></span></button></div></div></div><div class="Box-sc-g0xbh4-0 hQzvbe"><h2 class="Heading__StyledHeading-sc-1c1dgg0-0 cgQnMS sr-only" data-testid="screen-reader-heading">File metadata and controls</h2><div class="Box-sc-g0xbh4-0 bfkNRF"><ul aria-label="File view" class="SegmentedControl__SegmentedControlList-sc-1rzig82-0 huxtnT"><li class="Box-sc-g0xbh4-0 fXBLEV"><button aria-current="true" data-hotkey="Control+/ Control+c" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 dAjliH"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text">Code</div></span></button></li><li class="Box-sc-g0xbh4-0 gMPsNT"><button aria-current="false" data-hotkey="b,Shift+B,Control+/ Control+b" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 fIktcg"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text">Blame</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey="Control+/ Control+c" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="b,Shift+B,Control+/ Control+b" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 fleZSW react-code-size-details-in-header"><div class="Box-sc-g0xbh4-0 BnySK text-mono"><div title="10.6 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 fUpWeN"><span class="Text-sc-17v1xeu-0 gPDEWA">205 lines (186 loc) · 10.6 KB</span></div></div></div><div class="Box-sc-g0xbh4-0 react-code-size-details-in-header"><button type="button" id=":r67:" aria-haspopup="true" tabindex="0" data-testid="copilot-popover-button" data-size="small" class="types__StyledButton-sc-ws60qy-0 frAFhH" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="leadingVisual" class="Box-sc-g0xbh4-0 trpoQ"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 iBylDf"><button hidden="" data-testid="" data-hotkey="Control+Shift+&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&gt;"></button><button hidden="" data-testid="" data-hotkey="Control+Shift+&lt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&lt;"></button><div class="Box-sc-g0xbh4-0 kSGBPx react-blob-header-edit-and-raw-actions"><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><a href="https://github.com/acl2003/Task_1/raw/main/src/components/Events/index.js" data-testid="raw-button" data-hotkey="Control+/ Control+r" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 bkOoYh"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 kkrdEu"><span data-component="text">Raw</span></span></a><button data-component="IconButton" type="button" aria-label="Copy raw content" data-testid="copy-raw-button" data-hotkey="Control+Shift+C" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 gyYLjU"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span role="tooltip" aria-label="Download raw file" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-n"><button data-component="IconButton" type="button" aria-label="Download raw content" data-testid="download-raw-button" data-hotkey="Control+Shift+S" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 jQxWRE"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button></span></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey="Control+/ Control+r" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey="Control+Shift+C" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey="Control+Shift+S" data-hotkey-scope="read-only-cursor-text-area"></button><a class="Link__StyledLink-sc-14289xe-0 dheQRw js-github-dev-shortcut d-none" data-hotkey="., Control+Shift+/" href="https://github.dev/"></a><button hidden="" data-testid="" data-hotkey="., Control+Shift+/" data-hotkey-scope="read-only-cursor-text-area"></button><a class="Link__StyledLink-sc-14289xe-0 dheQRw js-github-dev-new-tab-shortcut d-none" data-hotkey="Shift+.,Shift+&gt;,&gt;" href="https://github.dev/" target="_blank"></a><button hidden="" data-testid="" data-hotkey="Shift+.,Shift+&gt;,&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><div class="ButtonGroup-sc-1gxhls1-0 cjbBGq"><span role="tooltip" aria-label="Fork this repository and edit the file" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-nw"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Edit file" data-hotkey="e,Shift+E" data-testid="edit-button" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 HrSzO" href="https://github.com/acl2003/Task_1/edit/main/src/components/Events/index.js"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a></span><button data-component="IconButton" type="button" aria-label="More edit options" data-testid="more-edit-button" id=":r68:" aria-haspopup="true" tabindex="0" data-size="small" data-no-visuals="true" class="types__StyledButton-sc-ws60qy-0 gyYLjU"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button></div><button hidden="" data-testid="" data-hotkey="e,Shift+E" data-hotkey-scope="read-only-cursor-text-area"></button></div><span role="tooltip" aria-label="Open symbols panel" class="Tooltip__TooltipBase-sc-17tf59c-0 bRTpIc tooltipped-nw"><button data-component="IconButton" type="button" aria-label="Symbols" aria-pressed="false" aria-expanded="false" aria-controls="symbols-pane" class="types__StyledButton-sc-ws60qy-0 bcQZPI" data-hotkey="Control+i" data-testid="symbols-button" id="symbols-button" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button></span><div class="Box-sc-g0xbh4-0 react-blob-header-edit-and-raw-actions-combined"><button data-component="IconButton" type="button" aria-label="Edit and raw actions" class="types__StyledButton-sc-ws60qy-0 dGDIQc js-blob-dropdown-click" title="More file actions" data-testid="more-file-actions-button" id=":r6a:" aria-haspopup="true" tabindex="0" data-size="small" data-no-visuals="true"><svg aria-hidden="true" focusable="false" role="img" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div></div><div class="Box-sc-g0xbh4-0"><div class="Box-sc-g0xbh4-0 eRTNXj"><div class="Box-sc-g0xbh4-0 bnmKvJ"><div class="Box-sc-g0xbh4-0 bSzjFt react-line-numbers"><div data-line-number="12" class="react-line-number react-code-text" style="padding-right: 16px;">12</div></div><div class="react-code-lines"><div class="react-code-text react-code-line-contents" style="min-height: auto;"><div><div class="react-file-line html-div" data-testid="code-cell" data-line-number="12" style="position: relative;"><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-v" data-code-text="Events"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text="  "></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text=")"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 ytOJl"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-g0xbh4-0 jWnGGx"><div class="Box-sc-g0xbh4-0 TCenl"><div id="highlighted-line-menu-positioner" class="position-relative"><div id="copilot-button-positioner" class="Box-sc-g0xbh4-0 cluMzC"><div class="Box-sc-g0xbh4-0 eRkHwF"><textarea id="read-only-cursor-text-area" data-testid="read-only-cursor-text-area" aria-label="file content" aria-readonly="true" inputmode="none" tabindex="0" aria-multiline="true" aria-haspopup="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-ms-editor="false" class="react-blob-textarea react-blob-print-hide" style="resize: none; margin-top: -2px; padding-left: 92px; padding-right: 70px; width: 100%; background-color: unset; box-sizing: border-box; color: transparent; position: absolute; border: none; tab-size: 8; outline: none; overflow: auto hidden; height: 4120px; font-size: 12px; line-height: 20px; overflow-wrap: normal; overscroll-behavior-x: none; white-space: pre; z-index: 1;">import React from "react";
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import  DateRangeFill  from "./Date_range_fill.jpg";
import searchIcon from './search.jpg'
import columns from './columns.jpg'
import "./index.css";
import EventItem from "../EventItem";

const Events =  () =&gt;{

    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [eventStartTime, setEventStartTime] = useState("");
    const [eventEndTime, setEventEndTime] = useState("");
    const [eventItemList, setEventItemList] = useState([]);
    const [originalEventItemList, setOriginalEventItemList] = useState([]);
    const [searchEvent, setSearchEvent] = useState("");
  


  const onAddEventItem = () =&gt;{
    if(eventName!=='' &amp;&amp; eventDescription!=="" &amp;&amp; eventStartDate!=="" &amp;&amp; eventEndDate!=="" &amp;&amp; eventStartTime!=="" &amp;&amp; eventEndTime!==""){
        const newItem = {
            id: uuidv4(),
            name : eventName,
            description : eventDescription,
            startDate : eventStartDate,
            endDate :eventEndDate ,
            startTime:eventStartTime,
            endTime : eventEndTime,
        }
        setEventItemList(prev =&gt; [...prev,newItem])
        setOriginalEventItemList(prev =&gt; [...prev,newItem])
        setEventName('')
        setEventDescription('')
        setEventStartDate('')
        setEventEndDate('')
        setEventStartTime('')
        setEventEndTime('')
    }
    else{
        alert("Enter Required Details");
    }
  }

  const onAddName = event =&gt;{
    setEventName(event.target.value)
  }
  const onAddDescription = event =&gt;{
    setEventDescription(event.target.value)
  }
  
  const onAddStartDate =event =&gt;{
    setEventStartDate(event.target.value)
    }
    const onAddEndDate =event =&gt;{
        setEventEndDate(event.target.value)
    }
    const onAddStartTime =event =&gt;{
        setEventStartTime(event.target.value)
    }
    const onAddEndTime =event =&gt;{
        setEventEndTime(event.target.value)
    }

    const filter = (event) =&gt; {
        const keyword = event.target.value.toLowerCase();
      
        if (keyword !== "") {
          const results = originalEventItemList.filter((each) =&gt; {
            return each.name.toLowerCase().includes(keyword);
          });
          setEventItemList(results);
        } else {
          // If the search input is empty, revert to the original list
          setEventItemList([...originalEventItemList]);
        }
      
        setSearchEvent(keyword);
      };
      
      
      


    return (
        
    &lt;div className='events-section' &gt;
        &lt;div className="events-top-bar"&gt;
      &lt;div&gt;
        &lt;div className="text-top-bar"&gt;Events&lt;/div&gt;
      &lt;/div&gt;
      &lt;div className="div-2"&gt;
        &lt;div className="div-3"&gt;
          &lt;button className="date-range-fill-wrapper"&gt;
            &lt;img src={DateRangeFill} alt="date"/&gt;
          &lt;/button&gt;
          &lt;button className="menu-wrapper"&gt;
          &lt;div className='bg-green' &gt;
          &lt;svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"&gt;
            &lt;rect x="4.76923" y="5" width="16" height="5" rx="1" stroke="#F7F9FC" stroke-width="2" stroke-linejoin="round"/&gt;
            &lt;rect x="4.76923" y="14" width="16" height="5" rx="1" stroke="#F7F9FC" stroke-width="2" stroke-linejoin="round"/&gt;
            &lt;/svg&gt;
          &lt;/div&gt;
          &lt;/button&gt;
        &lt;/div&gt;
    &lt;Popup
    trigger={&lt;button className="add-event-btn"&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="green"&gt;
        &lt;path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 10V14H8V10H4V8H8V4H10V8H14V10H10Z" fill="white"/&gt;
    &lt;/svg&gt;
      &lt;h4 className="tex"&gt;Add Event&lt;/h4&gt;
    &lt;/button&gt;}
    modal
    nested
  &gt;
    {close =&gt; (
      &lt;div className="modal"&gt;
        &lt;button className="close" onClick={close}&gt;
          &amp;times;
        &lt;/button&gt;
        &lt;div className="header"&gt;Add Event&lt;/div&gt;
        &lt;div className="content"&gt;
            &lt;div&gt;
                &lt;label htmlFor ="name" &gt;Enter Name of the Event  &lt;/label&gt; 
                &lt;input type="text" placeholder="  Name of the Event" id="name" onChange={onAddName} value={eventName} /&gt;
            &lt;/div&gt;
             &lt;div className="desc-cont" &gt;
                &lt;label htmlFor ="description" &gt;Enter Description of the Event  &lt;/label&gt; 
                &lt;textarea rows="5"cols="50" placeholder="Description of the Event..." id="description" onChange={onAddDescription} value={eventDescription} &gt;&lt;/textarea&gt;
             &lt;/div&gt;
             &lt;div&gt;
                &lt;label htmlFor ="start-date" &gt;Enter Start Date of the Event  &lt;/label&gt; 
                &lt;input type="date" id="start-date" onChange={onAddStartDate} value={eventStartDate} /&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;label htmlFor ="end-date" &gt;Enter End Date of the Event  &lt;/label&gt; 
                &lt;input type="date" id="end-date" onChange={onAddEndDate} value={eventEndDate} /&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;label htmlFor ="start-time" &gt;Enter Start Time of the Event  &lt;/label&gt; 
                &lt;input type="time" id="start-time" onChange={onAddStartTime} value={eventStartTime} /&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;label htmlFor ="end-time" &gt;Enter End Time of the Event  &lt;/label&gt; 
                &lt;input type="time" id="end-time" onChange={onAddEndTime} value={eventEndTime} /&gt;
            &lt;/div&gt;
            &lt;button className="add-event-btn" onClick={onAddEventItem} &gt;  Add Event&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    )}
  &lt;/Popup&gt;
      &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className='filter-section' &gt;
            &lt;div className='fs-1' &gt;
                &lt;select className='fs-dropdown' &gt;
                    &lt;option&gt;Event Name&lt;/option&gt;
                &lt;/select&gt;
                &lt;div className='search-container' &gt;
                    &lt;input type="search" className='search-bar' placeholder='Search' onChange={filter} value={searchEvent} /&gt;
                    &lt;img src={searchIcon} alt="searchIcon" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;button className="fs-2" &gt;
                &lt;img src={columns} alt="columns"/&gt;
                &lt;h4 className="fs2-text" &gt;Columns&lt;/h4&gt;
            &lt;/button&gt;
            
        &lt;/div&gt;
        &lt;div className="events-content-section" &gt;
            &lt;div className="ecs-table" &gt;
                &lt;div className="ecs-table-head" &gt;
                    &lt;h1 className="ecs-table-head-text" &gt;Name&lt;/h1&gt;
                    &lt;h1 className="ecs-table-head-text" &gt;Description&lt;/h1&gt;
                    &lt;h1 className="ecs-table-head-text" &gt;Start Date&lt;/h1&gt;
                    &lt;h1 className="ecs-table-head-text" &gt;End Date&lt;/h1&gt;
                    &lt;h1 className="ecs-table-head-text" &gt;Start Time&lt;/h1&gt;
                    &lt;h1 className="ecs-table-head-text" &gt;End Time&lt;/h1&gt;
            &lt;/div&gt;
                {eventItemList.length!==0 ?&lt;&gt;{eventItemList.map(each=&gt;(
                    &lt;EventItem item={each} key={each.id}/&gt;
                ))}&lt;/&gt; : &lt;div className="empty-view-section" &gt;
                    &lt;svg xmlns="http://www.w3.org/2000/svg" width="86" height="50" viewBox="0 0 86 50" fill="none"&gt;
                        &lt;path d="M34.2311 9.36423C35.8642 8.42149 36.6807 7.95011 37.6953 7.95011C38.7099 7.95011 39.5265 8.42149 41.1595 9.36423L69.5865 25.7751C71.2195 26.7179 72.036 27.1893 72.036 27.775C72.036 28.3608 71.2195 28.8321 69.5865 29.7749L65.0779 32.3777C64.6696 32.6134 64.4655 32.7312 64.2118 32.7312C63.9582 32.7312 63.754 32.6134 63.3458 32.3777L29.7225 12.967C29.3143 12.7313 29.1101 12.6135 29.1101 12.467C29.1101 12.3206 29.3143 12.2027 29.7225 11.9671L34.2311 9.36423Z" fill="#69C39F"/&gt;
                        &lt;path fill-rule="evenodd" clip-rule="evenodd" d="M11.1107 22.7135C9.4777 23.6563 8.66118 24.1277 8.66118 24.7134C8.66118 25.2992 9.4777 25.7705 11.1107 26.7133L39.5377 43.1242C41.1707 44.0669 41.9873 44.5383 43.0019 44.5383C44.0165 44.5383 44.833 44.0669 46.4661 43.1242L59.8135 35.4187C60.2218 35.183 60.4259 35.0652 60.4259 34.9187C60.4259 34.7723 60.2218 34.6544 59.8135 34.4188L26.1903 15.0081C25.782 14.7724 25.5779 14.6545 25.3242 14.6545C25.0706 14.6545 24.8664 14.7724 24.4582 15.0081L11.1107 22.7135ZM29.7615 22.1518C30.1697 21.9161 30.3739 21.7982 30.6275 21.7982C30.8812 21.7982 31.0853 21.9161 31.4936 22.1518L36.8325 25.234C37.2408 25.4697 37.4449 25.5875 37.4449 25.7339C37.4449 25.8804 37.2408 25.9982 36.8325 26.2339L35.0291 27.275C34.6208 27.5107 34.4167 27.6286 34.1631 27.6286C33.9094 27.6286 33.7053 27.5107 33.297 27.275L27.958 24.1928C27.5498 23.9572 27.3456 23.8393 27.3456 23.6929C27.3456 23.5464 27.5498 23.4286 27.958 23.1929L29.7615 22.1518ZM23.5565 25.8804C23.3028 25.8804 23.0987 25.9982 22.6904 26.2339L20.887 27.275C20.4787 27.5107 20.2746 27.6286 20.2746 27.775C20.2746 27.9214 20.4787 28.0393 20.887 28.275L26.2259 31.3572C26.6342 31.5929 26.8383 31.7107 27.092 31.7107C27.3456 31.7107 27.5498 31.5929 27.958 31.3572L29.7615 30.316C30.1697 30.0803 30.3739 29.9625 30.3739 29.8161C30.3739 29.6696 30.1697 29.5518 29.7615 29.3161L24.4225 26.2339C24.0142 25.9982 23.8101 25.8804 23.5565 25.8804ZM40.3681 28.275C40.7763 28.0393 40.9805 27.9214 41.2341 27.9214C41.4878 27.9214 41.6919 28.0393 42.1002 28.275L47.4391 31.3572C47.8474 31.5928 48.0515 31.7107 48.0515 31.8571C48.0515 32.0036 47.8474 32.1214 47.4391 32.3571L45.6357 33.3982C45.2274 33.6339 45.0233 33.7518 44.7697 33.7518C44.516 33.7518 44.3119 33.6339 43.9036 33.3982L38.5646 30.316C38.1564 30.0803 37.9522 29.9625 37.9522 29.8161C37.9522 29.6696 38.1564 29.5518 38.5646 29.3161L40.3681 28.275ZM34.1631 32.0036C33.9094 32.0036 33.7053 32.1214 33.297 32.3571L31.4936 33.3982C31.0853 33.6339 30.8812 33.7518 30.8812 33.8982C30.8812 34.0446 31.0853 34.1625 31.4936 34.3982L36.8325 37.4804C37.2408 37.716 37.4449 37.8339 37.6986 37.8339C37.9522 37.8339 38.1564 37.716 38.5646 37.4804L40.3681 36.4392C40.7763 36.2035 40.9805 36.0857 40.9805 35.9393C40.9805 35.7928 40.7763 35.675 40.3681 35.4393L35.0291 32.3571C34.6208 32.1214 34.4167 32.0036 34.1631 32.0036Z" fill="#69C39F"/&gt;
                        &lt;path d="M50.0703 10.426L44.767 13.4876" stroke="#69C39F" stroke-width="2" stroke-linecap="round"/&gt;
                        &lt;path d="M67.75 20.6313L62.4467 23.6929" stroke="#69C39F" stroke-width="2" stroke-linecap="round"/&gt;
                    &lt;/svg&gt;
                    &lt;h1&gt;No Events&lt;/h1&gt;
                    &lt;p&gt;Add Your First Event&lt;/p&gt;
                &lt;/div&gt; }
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

  )
}

export default Events</textarea><button hidden="" data-testid="" data-hotkey="Alt+F1,Control+Alt+˙,Control+Alt+h" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 cXpbTk"><div tabindex="0" class="Box-sc-g0xbh4-0 hHjsH"><div class="Box-sc-g0xbh4-0 etXmFv react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="8" data-paste-markdown-skip="true" data-hpc="true" style="height: 4100px;"><div class="react-line-numbers" style="pointer-events: auto; height: 4100px; position: relative; z-index: 2;"><div data-line-number="1" class="react-line-number react-code-text" style="padding-right: 16px;">1</div><div data-line-number="2" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(20px);">2</div><div data-line-number="3" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(40px);">3</div><div data-line-number="4" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(60px);">4</div><div data-line-number="5" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(80px);">5</div><div data-line-number="6" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(100px);">6</div><div data-line-number="7" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(120px);">7</div><div data-line-number="8" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(140px);">8</div><div data-line-number="9" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(160px);">9</div><div data-line-number="10" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(180px);">10</div><div data-line-number="11" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(200px);">11</div><div data-line-number="12" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(220px);">12<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="13" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(240px);">13</div><div data-line-number="14" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(260px);">14</div><div data-line-number="15" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(280px);">15</div><div data-line-number="16" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(300px);">16</div><div data-line-number="17" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(320px);">17</div><div data-line-number="18" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(340px);">18</div><div data-line-number="19" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(360px);">19</div><div data-line-number="20" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(380px);">20</div><div data-line-number="21" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(400px);">21</div><div data-line-number="22" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(420px);">22</div><div data-line-number="23" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(440px);">23</div><div data-line-number="24" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(460px);">24</div><div data-line-number="25" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(480px);">25</div><div data-line-number="26" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(500px);">26<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="27" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(520px);">27</div><div data-line-number="28" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(540px);">28</div><div data-line-number="29" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(560px);">29</div><div data-line-number="30" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(580px);">30</div><div data-line-number="31" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(600px);">31</div><div data-line-number="32" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(620px);">32</div><div data-line-number="33" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(640px);">33</div><div data-line-number="34" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(660px);">34</div><div data-line-number="35" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(680px);">35</div><div data-line-number="36" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(700px);">36</div><div data-line-number="37" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(720px);">37</div><div data-line-number="38" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(740px);">38</div><div data-line-number="39" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(760px);">39</div><div data-line-number="40" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(780px);">40</div><div data-line-number="41" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(800px);">41</div><div data-line-number="42" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(820px);">42</div><div data-line-number="43" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(840px);">43</div><div data-line-number="44" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(860px);">44</div><div data-line-number="45" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(880px);">45</div><div data-line-number="46" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(900px);">46</div><div data-line-number="47" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(920px);">47</div><div data-line-number="48" class="child-of-line-12 child-of-line-26  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(940px);">48</div><div data-line-number="49" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(960px);">49</div><div data-line-number="50" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(980px);">50</div><div data-line-number="51" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1000px);">51</div><div data-line-number="52" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1020px);">52</div><div data-line-number="53" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1040px);">53</div><div data-line-number="54" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1060px);">54</div><div data-line-number="55" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1080px);">55</div><div data-line-number="56" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1100px);">56</div><div data-line-number="57" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1120px);">57</div><div data-line-number="58" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1140px);">58</div><div data-line-number="59" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1160px);">59</div><div data-line-number="60" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1180px);">60</div><div data-line-number="61" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1200px);">61</div><div data-line-number="62" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1220px);">62</div><div data-line-number="63" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1240px);">63</div><div data-line-number="64" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1260px);">64</div><div data-line-number="65" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1280px);">65</div><div data-line-number="66" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1300px);">66</div><div data-line-number="67" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1320px);">67</div><div data-line-number="68" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1340px);">68</div><div data-line-number="69" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1360px);">69</div><div data-line-number="70" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1380px);">70</div><div data-line-number="71" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1400px);">71<span class="Box-sc-g0xbh4-0 hXUKEK"><div aria-label="Collapse code section" role="button" class="Box-sc-g0xbh4-0 cXzIIR"><svg aria-hidden="true" focusable="false" role="img" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="72" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1420px);">72</div><div data-line-number="73" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1440px);">73</div><div data-line-number="74" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1460px);">74</div><div data-line-number="75" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1480px);">75</div><div data-line-number="76" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1500px);">76</div><div data-line-number="77" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1520px);">77</div><div data-line-number="78" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1540px);">78</div><div data-line-number="79" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1560px);">79</div><div data-line-number="80" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1580px);">80</div><div data-line-number="81" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1600px);">81</div><div data-line-number="82" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1620px);">82</div><div data-line-number="83" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1640px);">83</div><div data-line-number="84" class="child-of-line-12 child-of-line-71  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1660px);">84</div><div data-line-number="85" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1680px);">85</div><div data-line-number="86" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1700px);">86</div><div data-line-number="87" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1720px);">87</div><div data-line-number="88" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1740px);">88</div><div data-line-number="89" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1760px);">89</div><div data-line-number="90" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1780px);">90</div><div data-line-number="91" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1800px);">91</div><div data-line-number="92" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1820px);">92</div><div data-line-number="93" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1840px);">93</div><div data-line-number="94" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1860px);">94</div><div data-line-number="95" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1880px);">95</div><div data-line-number="96" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1900px);">96</div><div data-line-number="97" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1920px);">97</div><div data-line-number="98" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1940px);">98</div><div data-line-number="99" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1960px);">99</div><div data-line-number="100" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(1980px);">100</div><div data-line-number="101" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2000px);">101</div><div data-line-number="102" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2020px);">102</div><div data-line-number="103" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2040px);">103</div><div data-line-number="104" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2060px);">104</div><div data-line-number="105" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2080px);">105</div><div data-line-number="106" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2100px);">106</div><div data-line-number="107" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2120px);">107</div><div data-line-number="108" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2140px);">108</div><div data-line-number="109" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2160px);">109</div><div data-line-number="110" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2180px);">110</div><div data-line-number="111" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2200px);">111</div><div data-line-number="112" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2220px);">112</div><div data-line-number="113" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2240px);">113</div><div data-line-number="114" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2260px);">114</div><div data-line-number="115" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2280px);">115</div><div data-line-number="116" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2300px);">116</div><div data-line-number="117" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2320px);">117</div><div data-line-number="118" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2340px);">118</div><div data-line-number="119" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2360px);">119</div><div data-line-number="120" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2380px);">120</div><div data-line-number="121" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2400px);">121</div><div data-line-number="122" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2420px);">122</div><div data-line-number="123" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2440px);">123</div><div data-line-number="124" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2460px);">124</div><div data-line-number="125" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2480px);">125</div><div data-line-number="126" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2500px);">126</div><div data-line-number="127" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2520px);">127</div><div data-line-number="128" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2540px);">128</div><div data-line-number="129" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2560px);">129</div><div data-line-number="130" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2580px);">130</div><div data-line-number="131" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2600px);">131</div><div data-line-number="132" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2620px);">132</div><div data-line-number="133" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2640px);">133</div><div data-line-number="134" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2660px);">134</div><div data-line-number="135" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2680px);">135</div><div data-line-number="136" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2700px);">136</div><div data-line-number="137" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2720px);">137</div><div data-line-number="138" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2740px);">138</div><div data-line-number="139" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2760px);">139</div><div data-line-number="140" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2780px);">140</div><div data-line-number="141" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2800px);">141</div><div data-line-number="142" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2820px);">142</div><div data-line-number="143" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2840px);">143</div><div data-line-number="144" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2860px);">144</div><div data-line-number="145" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2880px);">145</div><div data-line-number="146" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2900px);">146</div><div data-line-number="147" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2920px);">147</div><div data-line-number="148" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2940px);">148</div><div data-line-number="149" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2960px);">149</div><div data-line-number="150" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2980px);">150</div><div data-line-number="151" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3000px);">151</div><div data-line-number="152" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3020px);">152</div><div data-line-number="153" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3040px);">153</div><div data-line-number="154" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3060px);">154</div><div data-line-number="155" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3080px);">155</div><div data-line-number="156" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3100px);">156</div><div data-line-number="157" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3120px);">157</div><div data-line-number="158" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3140px);">158</div><div data-line-number="159" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3160px);">159</div><div data-line-number="160" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3180px);">160</div><div data-line-number="161" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3200px);">161</div><div data-line-number="162" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3220px);">162</div><div data-line-number="163" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3240px);">163</div><div data-line-number="164" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3260px);">164</div><div data-line-number="165" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3280px);">165</div><div data-line-number="166" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3300px);">166</div><div data-line-number="167" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3320px);">167</div><div data-line-number="168" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3340px);">168</div><div data-line-number="169" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3360px);">169</div><div data-line-number="170" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3380px);">170</div><div data-line-number="171" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3400px);">171</div><div data-line-number="172" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3420px);">172</div><div data-line-number="173" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3440px);">173</div><div data-line-number="174" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3460px);">174</div><div data-line-number="175" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3480px);">175</div><div data-line-number="176" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3500px);">176</div><div data-line-number="177" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3520px);">177</div><div data-line-number="178" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3540px);">178</div><div data-line-number="179" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3560px);">179</div><div data-line-number="180" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3580px);">180</div><div data-line-number="181" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3600px);">181</div><div data-line-number="182" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3620px);">182</div><div data-line-number="183" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3640px);">183</div><div data-line-number="184" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3660px);">184</div><div data-line-number="185" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3680px);">185</div><div data-line-number="186" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3700px);">186</div><div data-line-number="187" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3720px);">187</div><div data-line-number="188" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3740px);">188</div><div data-line-number="189" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3760px);">189</div><div data-line-number="190" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3780px);">190</div><div data-line-number="191" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3800px);">191</div><div data-line-number="192" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3820px);">192</div><div data-line-number="193" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3840px);">193</div><div data-line-number="194" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3860px);">194</div><div data-line-number="195" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3880px);">195</div><div data-line-number="196" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3900px);">196</div><div data-line-number="197" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3920px);">197</div><div data-line-number="198" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3940px);">198</div><div data-line-number="199" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3960px);">199</div><div data-line-number="200" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3980px);">200</div><div data-line-number="201" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4000px);">201</div><div data-line-number="202" class="child-of-line-12  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4020px);">202</div><div data-line-number="203" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4040px);">203</div><div data-line-number="204" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4060px);">204</div><div data-line-number="205" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4080px);">205</div></div><div class="react-code-lines" style="height: 4100px;"><div data-key="0" class="react-code-text react-code-line-contents" style="min-height: auto;"><div><div id="LC1" class="react-file-line html-div" data-testid="code-cell" data-line-number="1" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-v" data-code-text="React"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&quot;react&quot;"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="1" class="react-code-text react-code-line-contents virtual" style="transform: translateY(20px); min-height: auto;"><div><div id="LC2" class="react-file-line html-div" data-testid="code-cell" data-line-number="2" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="useState"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&#39;react&#39;"></span></div></div></div><div data-key="2" class="react-code-text react-code-line-contents virtual" style="transform: translateY(40px); min-height: auto;"><div><div id="LC3" class="react-file-line html-div" data-testid="code-cell" data-line-number="3" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="v4"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="as"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="uuidv4"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&#39;uuid&#39;"></span></div></div></div><div data-key="3" class="react-code-text react-code-line-contents virtual" style="transform: translateY(60px); min-height: auto;"><div><div id="LC4" class="react-file-line html-div" data-testid="code-cell" data-line-number="4" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-v" data-code-text="Popup"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&#39;reactjs-popup&#39;"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="4" class="react-code-text react-code-line-contents virtual" style="transform: translateY(80px); min-height: auto;"><div><div id="LC5" class="react-file-line html-div" data-testid="code-cell" data-line-number="5" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&#39;reactjs-popup/dist/index.css&#39;"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="5" class="react-code-text react-code-line-contents virtual" style="transform: translateY(100px); min-height: auto;"><div><div id="LC6" class="react-file-line html-div" data-testid="code-cell" data-line-number="6" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text="  "></span><span class="pl-v" data-code-text="DateRangeFill"></span><span data-code-text="  "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&quot;./Date_range_fill.jpg&quot;"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="6" class="react-code-text react-code-line-contents virtual" style="transform: translateY(120px); min-height: auto;"><div><div id="LC7" class="react-file-line html-div" data-testid="code-cell" data-line-number="7" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="searchIcon"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&#39;./search.jpg&#39;"></span></div></div></div><div data-key="7" class="react-code-text react-code-line-contents virtual" style="transform: translateY(140px); min-height: auto;"><div><div id="LC8" class="react-file-line html-div" data-testid="code-cell" data-line-number="8" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="columns"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&#39;./columns.jpg&#39;"></span></div></div></div><div data-key="8" class="react-code-text react-code-line-contents virtual" style="transform: translateY(160px); min-height: auto;"><div><div id="LC9" class="react-file-line html-div" data-testid="code-cell" data-line-number="9" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&quot;./index.css&quot;"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="9" class="react-code-text react-code-line-contents virtual" style="transform: translateY(180px); min-height: auto;"><div><div id="LC10" class="react-file-line html-div" data-testid="code-cell" data-line-number="10" style="position: relative;"><span class="pl-k" data-code-text="import"></span><span data-code-text=" "></span><span class="pl-v" data-code-text="EventItem"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="from"></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&quot;../EventItem&quot;"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="10" class="react-code-text react-code-line-contents virtual" style="transform: translateY(200px); min-height: auto;"><div><div id="LC11" class="react-file-line html-div" data-testid="code-cell" data-line-number="11" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="11" class="react-code-text react-code-line-contents virtual" style="transform: translateY(220px); min-height: auto;"><div><div id="LC12" class="react-file-line html-div" data-testid="code-cell" data-line-number="12" style="position: relative;"><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-v" data-code-text="Events"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text="  "></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text=")"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="12" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(240px); min-height: auto;"><div><div id="LC13" class="react-file-line html-div" data-testid="code-cell" data-line-number="13" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="13" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(260px); min-height: auto;"><div><div id="LC14" class="react-file-line html-div" data-testid="code-cell" data-line-number="14" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventName"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventName"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="14" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(280px); min-height: auto;"><div><div id="LC15" class="react-file-line html-div" data-testid="code-cell" data-line-number="15" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventDescription"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventDescription"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="15" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(300px); min-height: auto;"><div><div id="LC16" class="react-file-line html-div" data-testid="code-cell" data-line-number="16" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventStartDate"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventStartDate"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="16" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(320px); min-height: auto;"><div><div id="LC17" class="react-file-line html-div" data-testid="code-cell" data-line-number="17" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventEndDate"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventEndDate"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="17" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(340px); min-height: auto;"><div><div id="LC18" class="react-file-line html-div" data-testid="code-cell" data-line-number="18" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventStartTime"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventStartTime"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="18" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(360px); min-height: auto;"><div><div id="LC19" class="react-file-line html-div" data-testid="code-cell" data-line-number="19" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventEndTime"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventEndTime"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="19" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(380px); min-height: auto;"><div><div id="LC20" class="react-file-line html-div" data-testid="code-cell" data-line-number="20" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="eventItemList"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setEventItemList"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text="["></span><span class="pl-kos" data-code-text="]"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="20" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(400px); min-height: auto;"><div><div id="LC21" class="react-file-line html-div" data-testid="code-cell" data-line-number="21" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="originalEventItemList"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setOriginalEventItemList"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text="["></span><span class="pl-kos" data-code-text="]"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="21" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(420px); min-height: auto;"><div><div id="LC22" class="react-file-line html-div" data-testid="code-cell" data-line-number="22" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span class="pl-s1" data-code-text="searchEvent"></span><span class="pl-kos" data-code-text=","></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="setSearchEvent"></span><span class="pl-kos" data-code-text="]"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-en" data-code-text="useState"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="22" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(440px); min-height: auto;"><div><div id="LC23" class="react-file-line html-div" data-testid="code-cell" data-line-number="23" style="position: relative;"><span data-code-text="  "></span></div></div></div><div data-key="23" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(460px); min-height: auto;"><div><div id="LC24" class="react-file-line html-div" data-testid="code-cell" data-line-number="24" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="24" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(480px); min-height: auto;"><div><div id="LC25" class="react-file-line html-div" data-testid="code-cell" data-line-number="25" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="25" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(500px); min-height: auto;"><div><div id="LC26" class="react-file-line html-div" data-testid="code-cell" data-line-number="26" style="position: relative;"><span data-code-text="  "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddEventItem"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text=")"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="26" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(520px); min-height: auto;"><div><div id="LC27" class="react-file-line html-div" data-testid="code-cell" data-line-number="27" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="if"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="eventName"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&amp;&amp;"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="eventDescription"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&amp;&amp;"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="eventStartDate"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&amp;&amp;"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="eventEndDate"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&amp;&amp;"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="eventStartTime"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&amp;&amp;"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="eventEndTime"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="27" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(540px); min-height: auto;"><div><div id="LC28" class="react-file-line html-div" data-testid="code-cell" data-line-number="28" style="position: relative;"><span data-code-text="        "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="newItem"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="28" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(560px); min-height: auto;"><div><div id="LC29" class="react-file-line html-div" data-testid="code-cell" data-line-number="29" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="id"></span><span data-code-text=": "></span><span class="pl-en" data-code-text="uuidv4"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="29" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(580px); min-height: auto;"><div><div id="LC30" class="react-file-line html-div" data-testid="code-cell" data-line-number="30" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="name"></span><span data-code-text=" : "></span><span class="pl-s1" data-code-text="eventName"></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="30" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(600px); min-height: auto;"><div><div id="LC31" class="react-file-line html-div" data-testid="code-cell" data-line-number="31" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="description"></span><span data-code-text=" : "></span><span class="pl-s1" data-code-text="eventDescription"></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="31" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(620px); min-height: auto;"><div><div id="LC32" class="react-file-line html-div" data-testid="code-cell" data-line-number="32" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="startDate"></span><span data-code-text=" : "></span><span class="pl-s1" data-code-text="eventStartDate"></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="32" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(640px); min-height: auto;"><div><div id="LC33" class="react-file-line html-div" data-testid="code-cell" data-line-number="33" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="endDate"></span><span data-code-text=" :"></span><span class="pl-s1" data-code-text="eventEndDate"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="33" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(660px); min-height: auto;"><div><div id="LC34" class="react-file-line html-div" data-testid="code-cell" data-line-number="34" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="startTime"></span><span data-code-text=":"></span><span class="pl-s1" data-code-text="eventStartTime"></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="34" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(680px); min-height: auto;"><div><div id="LC35" class="react-file-line html-div" data-testid="code-cell" data-line-number="35" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="endTime"></span><span data-code-text=" : "></span><span class="pl-s1" data-code-text="eventEndTime"></span><span class="pl-kos" data-code-text=","></span></div></div></div><div data-key="35" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(700px); min-height: auto;"><div><div id="LC36" class="react-file-line html-div" data-testid="code-cell" data-line-number="36" style="position: relative;"><span data-code-text="        "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="36" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(720px); min-height: auto;"><div><div id="LC37" class="react-file-line html-div" data-testid="code-cell" data-line-number="37" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventItemList"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="prev"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span data-code-text="..."></span><span class="pl-s1" data-code-text="prev"></span><span class="pl-kos" data-code-text=","></span><span class="pl-s1" data-code-text="newItem"></span><span class="pl-kos" data-code-text="]"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="37" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(740px); min-height: auto;"><div><div id="LC38" class="react-file-line html-div" data-testid="code-cell" data-line-number="38" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setOriginalEventItemList"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="prev"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="["></span><span data-code-text="..."></span><span class="pl-s1" data-code-text="prev"></span><span class="pl-kos" data-code-text=","></span><span class="pl-s1" data-code-text="newItem"></span><span class="pl-kos" data-code-text="]"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="38" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(760px); min-height: auto;"><div><div id="LC39" class="react-file-line html-div" data-testid="code-cell" data-line-number="39" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventName"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="39" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(780px); min-height: auto;"><div><div id="LC40" class="react-file-line html-div" data-testid="code-cell" data-line-number="40" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventDescription"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="40" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(800px); min-height: auto;"><div><div id="LC41" class="react-file-line html-div" data-testid="code-cell" data-line-number="41" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventStartDate"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="41" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(820px); min-height: auto;"><div><div id="LC42" class="react-file-line html-div" data-testid="code-cell" data-line-number="42" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventEndDate"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="42" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(840px); min-height: auto;"><div><div id="LC43" class="react-file-line html-div" data-testid="code-cell" data-line-number="43" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventStartTime"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="43" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(860px); min-height: auto;"><div><div id="LC44" class="react-file-line html-div" data-testid="code-cell" data-line-number="44" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventEndTime"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&#39;&#39;"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="44" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(880px); min-height: auto;"><div><div id="LC45" class="react-file-line html-div" data-testid="code-cell" data-line-number="45" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="45" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(900px); min-height: auto;"><div><div id="LC46" class="react-file-line html-div" data-testid="code-cell" data-line-number="46" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="else"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="46" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(920px); min-height: auto;"><div><div id="LC47" class="react-file-line html-div" data-testid="code-cell" data-line-number="47" style="position: relative;"><span data-code-text="        "></span><span class="pl-en" data-code-text="alert"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s" data-code-text="&quot;Enter Required Details&quot;"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="47" class="child-of-line-12 child-of-line-26  react-code-text react-code-line-contents virtual" style="transform: translateY(940px); min-height: auto;"><div><div id="LC48" class="react-file-line html-div" data-testid="code-cell" data-line-number="48" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="48" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(960px); min-height: auto;"><div><div id="LC49" class="react-file-line html-div" data-testid="code-cell" data-line-number="49" style="position: relative;"><span data-code-text="  "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="49" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(980px); min-height: auto;"><div><div id="LC50" class="react-file-line html-div" data-testid="code-cell" data-line-number="50" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="50" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1000px); min-height: auto;"><div><div id="LC51" class="react-file-line html-div" data-testid="code-cell" data-line-number="51" style="position: relative;"><span data-code-text="  "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddName"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="event"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="51" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1020px); min-height: auto;"><div><div id="LC52" class="react-file-line html-div" data-testid="code-cell" data-line-number="52" style="position: relative;"><span data-code-text="    "></span><span class="pl-s1" data-code-text="setEventName"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="52" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1040px); min-height: auto;"><div><div id="LC53" class="react-file-line html-div" data-testid="code-cell" data-line-number="53" style="position: relative;"><span data-code-text="  "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="53" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1060px); min-height: auto;"><div><div id="LC54" class="react-file-line html-div" data-testid="code-cell" data-line-number="54" style="position: relative;"><span data-code-text="  "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddDescription"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="event"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="54" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1080px); min-height: auto;"><div><div id="LC55" class="react-file-line html-div" data-testid="code-cell" data-line-number="55" style="position: relative;"><span data-code-text="    "></span><span class="pl-s1" data-code-text="setEventDescription"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="55" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1100px); min-height: auto;"><div><div id="LC56" class="react-file-line html-div" data-testid="code-cell" data-line-number="56" style="position: relative;"><span data-code-text="  "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="56" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1120px); min-height: auto;"><div><div id="LC57" class="react-file-line html-div" data-testid="code-cell" data-line-number="57" style="position: relative;"><span data-code-text="  "></span></div></div></div><div data-key="57" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1140px); min-height: auto;"><div><div id="LC58" class="react-file-line html-div" data-testid="code-cell" data-line-number="58" style="position: relative;"><span data-code-text="  "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddStartDate"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s1" data-code-text="event"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="58" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1160px); min-height: auto;"><div><div id="LC59" class="react-file-line html-div" data-testid="code-cell" data-line-number="59" style="position: relative;"><span data-code-text="    "></span><span class="pl-s1" data-code-text="setEventStartDate"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="59" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1180px); min-height: auto;"><div><div id="LC60" class="react-file-line html-div" data-testid="code-cell" data-line-number="60" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="60" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1200px); min-height: auto;"><div><div id="LC61" class="react-file-line html-div" data-testid="code-cell" data-line-number="61" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddEndDate"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s1" data-code-text="event"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="61" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1220px); min-height: auto;"><div><div id="LC62" class="react-file-line html-div" data-testid="code-cell" data-line-number="62" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventEndDate"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="62" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1240px); min-height: auto;"><div><div id="LC63" class="react-file-line html-div" data-testid="code-cell" data-line-number="63" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="63" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1260px); min-height: auto;"><div><div id="LC64" class="react-file-line html-div" data-testid="code-cell" data-line-number="64" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddStartTime"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s1" data-code-text="event"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="64" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1280px); min-height: auto;"><div><div id="LC65" class="react-file-line html-div" data-testid="code-cell" data-line-number="65" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventStartTime"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="65" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1300px); min-height: auto;"><div><div id="LC66" class="react-file-line html-div" data-testid="code-cell" data-line-number="66" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="66" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1320px); min-height: auto;"><div><div id="LC67" class="react-file-line html-div" data-testid="code-cell" data-line-number="67" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="onAddEndTime"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s1" data-code-text="event"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="67" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1340px); min-height: auto;"><div><div id="LC68" class="react-file-line html-div" data-testid="code-cell" data-line-number="68" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setEventEndTime"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="68" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1360px); min-height: auto;"><div><div id="LC69" class="react-file-line html-div" data-testid="code-cell" data-line-number="69" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="69" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1380px); min-height: auto;"><div><div id="LC70" class="react-file-line html-div" data-testid="code-cell" data-line-number="70" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="70" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1400px); min-height: auto;"><div><div id="LC71" class="react-file-line html-div" data-testid="code-cell" data-line-number="71" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-en" data-code-text="filter"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text=")"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="71" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1420px); min-height: auto;"><div><div id="LC72" class="react-file-line html-div" data-testid="code-cell" data-line-number="72" style="position: relative;"><span data-code-text="        "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="keyword"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="event"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="target"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="value"></span><span class="pl-kos" data-code-text="."></span><span class="pl-en" data-code-text="toLowerCase"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="72" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1440px); min-height: auto;"><div><div id="LC73" class="react-file-line html-div" data-testid="code-cell" data-line-number="73" style="position: relative;"><span data-code-text="      "></span></div></div></div><div data-key="73" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1460px); min-height: auto;"><div><div id="LC74" class="react-file-line html-div" data-testid="code-cell" data-line-number="74" style="position: relative;"><span data-code-text="        "></span><span class="pl-k" data-code-text="if"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="keyword"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="!=="></span><span data-code-text=" "></span><span class="pl-s" data-code-text="&quot;&quot;"></span><span class="pl-kos" data-code-text=")"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="74" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1480px); min-height: auto;"><div><div id="LC75" class="react-file-line html-div" data-testid="code-cell" data-line-number="75" style="position: relative;"><span data-code-text="          "></span><span class="pl-k" data-code-text="const"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="results"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="originalEventItemList"></span><span class="pl-kos" data-code-text="."></span><span class="pl-en" data-code-text="filter"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="each"></span><span class="pl-kos" data-code-text=")"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="75" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1500px); min-height: auto;"><div><div id="LC76" class="react-file-line html-div" data-testid="code-cell" data-line-number="76" style="position: relative;"><span data-code-text="            "></span><span class="pl-k" data-code-text="return"></span><span data-code-text=" "></span><span class="pl-s1" data-code-text="each"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="name"></span><span class="pl-kos" data-code-text="."></span><span class="pl-en" data-code-text="toLowerCase"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text="."></span><span class="pl-en" data-code-text="includes"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="keyword"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="76" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1520px); min-height: auto;"><div><div id="LC77" class="react-file-line html-div" data-testid="code-cell" data-line-number="77" style="position: relative;"><span data-code-text="          "></span><span class="pl-kos" data-code-text="}"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="77" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1540px); min-height: auto;"><div><div id="LC78" class="react-file-line html-div" data-testid="code-cell" data-line-number="78" style="position: relative;"><span data-code-text="          "></span><span class="pl-s1" data-code-text="setEventItemList"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="results"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="78" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1560px); min-height: auto;"><div><div id="LC79" class="react-file-line html-div" data-testid="code-cell" data-line-number="79" style="position: relative;"><span data-code-text="        "></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="else"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="{"></span></div></div></div><div data-key="79" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1580px); min-height: auto;"><div><div id="LC80" class="react-file-line html-div" data-testid="code-cell" data-line-number="80" style="position: relative;"><span data-code-text="          "></span><span class="pl-c" data-code-text="// If the search input is empty, revert to the original list"></span></div></div></div><div data-key="80" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1600px); min-height: auto;"><div><div id="LC81" class="react-file-line html-div" data-testid="code-cell" data-line-number="81" style="position: relative;"><span data-code-text="          "></span><span class="pl-s1" data-code-text="setEventItemList"></span><span class="pl-kos" data-code-text="("></span><span class="pl-kos" data-code-text="["></span><span data-code-text="..."></span><span class="pl-s1" data-code-text="originalEventItemList"></span><span class="pl-kos" data-code-text="]"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="81" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1620px); min-height: auto;"><div><div id="LC82" class="react-file-line html-div" data-testid="code-cell" data-line-number="82" style="position: relative;"><span data-code-text="        "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="82" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1640px); min-height: auto;"><div><div id="LC83" class="react-file-line html-div" data-testid="code-cell" data-line-number="83" style="position: relative;"><span data-code-text="      "></span></div></div></div><div data-key="83" class="child-of-line-12 child-of-line-71  react-code-text react-code-line-contents virtual" style="transform: translateY(1660px); min-height: auto;"><div><div id="LC84" class="react-file-line html-div" data-testid="code-cell" data-line-number="84" style="position: relative;"><span data-code-text="        "></span><span class="pl-s1" data-code-text="setSearchEvent"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="keyword"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="84" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1680px); min-height: auto;"><div><div id="LC85" class="react-file-line html-div" data-testid="code-cell" data-line-number="85" style="position: relative;"><span data-code-text="      "></span><span class="pl-kos" data-code-text="}"></span><span class="pl-kos" data-code-text=";"></span></div></div></div><div data-key="85" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1700px); min-height: auto;"><div><div id="LC86" class="react-file-line html-div" data-testid="code-cell" data-line-number="86" style="position: relative;"><span data-code-text="      "></span></div></div></div><div data-key="86" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1720px); min-height: auto;"><div><div id="LC87" class="react-file-line html-div" data-testid="code-cell" data-line-number="87" style="position: relative;"><span data-code-text="      "></span></div></div></div><div data-key="87" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1740px); min-height: auto;"><div><div id="LC88" class="react-file-line html-div" data-testid="code-cell" data-line-number="88" style="position: relative;"><span data-code-text="      "></span></div></div></div><div data-key="88" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1760px); min-height: auto;"><div><div id="LC89" class="react-file-line html-div" data-testid="code-cell" data-line-number="89" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="89" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1780px); min-height: auto;"><div><div id="LC90" class="react-file-line html-div" data-testid="code-cell" data-line-number="90" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="90" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1800px); min-height: auto;"><div><div id="LC91" class="react-file-line html-div" data-testid="code-cell" data-line-number="91" style="position: relative;"><span data-code-text="    "></span><span class="pl-k" data-code-text="return"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="("></span></div></div></div><div data-key="91" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1820px); min-height: auto;"><div><div id="LC92" class="react-file-line html-div" data-testid="code-cell" data-line-number="92" style="position: relative;"><span data-code-text="        "></span></div></div></div><div data-key="92" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1840px); min-height: auto;"><div><div id="LC93" class="react-file-line html-div" data-testid="code-cell" data-line-number="93" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;events-section&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="93" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1860px); min-height: auto;"><div><div id="LC94" class="react-file-line html-div" data-testid="code-cell" data-line-number="94" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;events-top-bar&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="94" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1880px); min-height: auto;"><div><div id="LC95" class="react-file-line html-div" data-testid="code-cell" data-line-number="95" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="95" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1900px); min-height: auto;"><div><div id="LC96" class="react-file-line html-div" data-testid="code-cell" data-line-number="96" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;text-top-bar&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Events"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="96" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1920px); min-height: auto;"><div><div id="LC97" class="react-file-line html-div" data-testid="code-cell" data-line-number="97" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="97" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1940px); min-height: auto;"><div><div id="LC98" class="react-file-line html-div" data-testid="code-cell" data-line-number="98" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;div-2&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="98" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1960px); min-height: auto;"><div><div id="LC99" class="react-file-line html-div" data-testid="code-cell" data-line-number="99" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;div-3&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="99" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(1980px); min-height: auto;"><div><div id="LC100" class="react-file-line html-div" data-testid="code-cell" data-line-number="100" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="button"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;date-range-fill-wrapper&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="100" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2000px); min-height: auto;"><div><div id="LC101" class="react-file-line html-div" data-testid="code-cell" data-line-number="101" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="img"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="src"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-v" data-code-text="DateRangeFill"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="alt"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;date&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="101" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2020px); min-height: auto;"><div><div id="LC102" class="react-file-line html-div" data-testid="code-cell" data-line-number="102" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="button"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="102" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2040px); min-height: auto;"><div><div id="LC103" class="react-file-line html-div" data-testid="code-cell" data-line-number="103" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="button"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;menu-wrapper&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="103" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2060px); min-height: auto;"><div><div id="LC104" class="react-file-line html-div" data-testid="code-cell" data-line-number="104" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;bg-green&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="104" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2080px); min-height: auto;"><div><div id="LC105" class="react-file-line html-div" data-testid="code-cell" data-line-number="105" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="svg"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="xmlns"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;http://www.w3.org/2000/svg&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;25&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="height"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;24&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="viewBox"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;0 0 25 24&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;none&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="105" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2100px); min-height: auto;"><div><div id="LC106" class="react-file-line html-div" data-testid="code-cell" data-line-number="106" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="rect"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="x"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;4.76923&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="y"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;5&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;16&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="height"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;5&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="rx"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;1&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;#F7F9FC&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;2&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-linejoin"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;round&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="106" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2120px); min-height: auto;"><div><div id="LC107" class="react-file-line html-div" data-testid="code-cell" data-line-number="107" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="rect"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="x"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;4.76923&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="y"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;14&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;16&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="height"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;5&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="rx"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;1&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;#F7F9FC&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;2&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-linejoin"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;round&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="107" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2140px); min-height: auto;"><div><div id="LC108" class="react-file-line html-div" data-testid="code-cell" data-line-number="108" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="svg"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="108" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2160px); min-height: auto;"><div><div id="LC109" class="react-file-line html-div" data-testid="code-cell" data-line-number="109" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="109" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2180px); min-height: auto;"><div><div id="LC110" class="react-file-line html-div" data-testid="code-cell" data-line-number="110" style="position: relative;"><span data-code-text="          "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="button"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="110" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2200px); min-height: auto;"><div><div id="LC111" class="react-file-line html-div" data-testid="code-cell" data-line-number="111" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="111" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2220px); min-height: auto;"><div><div id="LC112" class="react-file-line html-div" data-testid="code-cell" data-line-number="112" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="Popup"></span></div></div></div><div data-key="112" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2240px); min-height: auto;"><div><div id="LC113" class="react-file-line html-div" data-testid="code-cell" data-line-number="113" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="trigger"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="button"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;add-event-btn&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="113" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2260px); min-height: auto;"><div><div id="LC114" class="react-file-line html-div" data-testid="code-cell" data-line-number="114" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="svg"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="xmlns"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;http://www.w3.org/2000/svg&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;18&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="height"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;18&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="viewBox"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;0 0 18 18&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;green&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="114" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2280px); min-height: auto;"><div><div id="LC115" class="react-file-line html-div" data-testid="code-cell" data-line-number="115" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="path"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill-rule"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;evenodd&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="clip-rule"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;evenodd&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="d"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 10V14H8V10H4V8H8V4H10V8H14V10H10Z&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;white&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="115" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2300px); min-height: auto;"><div><div id="LC116" class="react-file-line html-div" data-testid="code-cell" data-line-number="116" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="svg"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="116" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2320px); min-height: auto;"><div><div id="LC117" class="react-file-line html-div" data-testid="code-cell" data-line-number="117" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h4"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;tex&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Add Event"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h4"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="117" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2340px); min-height: auto;"><div><div id="LC118" class="react-file-line html-div" data-testid="code-cell" data-line-number="118" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="button"></span><span class="pl-c1" data-code-text="&gt;"></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="118" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2360px); min-height: auto;"><div><div id="LC119" class="react-file-line html-div" data-testid="code-cell" data-line-number="119" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="modal"></span></div></div></div><div data-key="119" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2380px); min-height: auto;"><div><div id="LC120" class="react-file-line html-div" data-testid="code-cell" data-line-number="120" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="nested"></span></div></div></div><div data-key="120" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2400px); min-height: auto;"><div><div id="LC121" class="react-file-line html-div" data-testid="code-cell" data-line-number="121" style="position: relative;"><span data-code-text="  "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="121" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2420px); min-height: auto;"><div><div id="LC122" class="react-file-line html-div" data-testid="code-cell" data-line-number="122" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="close"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="=&gt;"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="("></span></div></div></div><div data-key="122" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2440px); min-height: auto;"><div><div id="LC123" class="react-file-line html-div" data-testid="code-cell" data-line-number="123" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;modal&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="123" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2460px); min-height: auto;"><div><div id="LC124" class="react-file-line html-div" data-testid="code-cell" data-line-number="124" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="button"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;close&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onClick"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="close"></span><span class="pl-kos" data-code-text="}"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="124" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2480px); min-height: auto;"><div><div id="LC125" class="react-file-line html-div" data-testid="code-cell" data-line-number="125" style="position: relative;"><span data-code-text="          &amp;times;"></span></div></div></div><div data-key="125" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2500px); min-height: auto;"><div><div id="LC126" class="react-file-line html-div" data-testid="code-cell" data-line-number="126" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="button"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="126" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2520px); min-height: auto;"><div><div id="LC127" class="react-file-line html-div" data-testid="code-cell" data-line-number="127" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;header&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Add Event"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="127" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2540px); min-height: auto;"><div><div id="LC128" class="react-file-line html-div" data-testid="code-cell" data-line-number="128" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;content&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="128" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2560px); min-height: auto;"><div><div id="LC129" class="react-file-line html-div" data-testid="code-cell" data-line-number="129" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="129" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2580px); min-height: auto;"><div><div id="LC130" class="react-file-line html-div" data-testid="code-cell" data-line-number="130" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="label"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="htmlFor"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;name&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Enter Name of the Event  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="label"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span></div></div></div><div data-key="130" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2600px); min-height: auto;"><div><div id="LC131" class="react-file-line html-div" data-testid="code-cell" data-line-number="131" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="input"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="type"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="placeholder"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;  Name of the Event&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="id"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;name&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddName"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventName"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="131" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2620px); min-height: auto;"><div><div id="LC132" class="react-file-line html-div" data-testid="code-cell" data-line-number="132" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="132" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2640px); min-height: auto;"><div><div id="LC133" class="react-file-line html-div" data-testid="code-cell" data-line-number="133" style="position: relative;"><span data-code-text="             "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;desc-cont&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="133" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2660px); min-height: auto;"><div><div id="LC134" class="react-file-line html-div" data-testid="code-cell" data-line-number="134" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="label"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="htmlFor"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;description&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Enter Description of the Event  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="label"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span></div></div></div><div data-key="134" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2680px); min-height: auto;"><div><div id="LC135" class="react-file-line html-div" data-testid="code-cell" data-line-number="135" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="textarea"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="rows"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;5&quot;"></span><span class="pl-c1" data-code-text="cols"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;50&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="placeholder"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;Description of the Event...&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="id"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;description&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddDescription"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventDescription"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="textarea"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="135" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2700px); min-height: auto;"><div><div id="LC136" class="react-file-line html-div" data-testid="code-cell" data-line-number="136" style="position: relative;"><span data-code-text="             "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="136" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2720px); min-height: auto;"><div><div id="LC137" class="react-file-line html-div" data-testid="code-cell" data-line-number="137" style="position: relative;"><span data-code-text="             "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="137" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2740px); min-height: auto;"><div><div id="LC138" class="react-file-line html-div" data-testid="code-cell" data-line-number="138" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="label"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="htmlFor"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;start-date&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Enter Start Date of the Event  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="label"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span></div></div></div><div data-key="138" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2760px); min-height: auto;"><div><div id="LC139" class="react-file-line html-div" data-testid="code-cell" data-line-number="139" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="input"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="type"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;date&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="id"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;start-date&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddStartDate"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventStartDate"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="139" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2780px); min-height: auto;"><div><div id="LC140" class="react-file-line html-div" data-testid="code-cell" data-line-number="140" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="140" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2800px); min-height: auto;"><div><div id="LC141" class="react-file-line html-div" data-testid="code-cell" data-line-number="141" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="141" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2820px); min-height: auto;"><div><div id="LC142" class="react-file-line html-div" data-testid="code-cell" data-line-number="142" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="label"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="htmlFor"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;end-date&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Enter End Date of the Event  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="label"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span></div></div></div><div data-key="142" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2840px); min-height: auto;"><div><div id="LC143" class="react-file-line html-div" data-testid="code-cell" data-line-number="143" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="input"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="type"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;date&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="id"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;end-date&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddEndDate"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventEndDate"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="143" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2860px); min-height: auto;"><div><div id="LC144" class="react-file-line html-div" data-testid="code-cell" data-line-number="144" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="144" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2880px); min-height: auto;"><div><div id="LC145" class="react-file-line html-div" data-testid="code-cell" data-line-number="145" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="145" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2900px); min-height: auto;"><div><div id="LC146" class="react-file-line html-div" data-testid="code-cell" data-line-number="146" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="label"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="htmlFor"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;start-time&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Enter Start Time of the Event  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="label"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span></div></div></div><div data-key="146" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2920px); min-height: auto;"><div><div id="LC147" class="react-file-line html-div" data-testid="code-cell" data-line-number="147" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="input"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="type"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;time&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="id"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;start-time&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddStartTime"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventStartTime"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="147" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2940px); min-height: auto;"><div><div id="LC148" class="react-file-line html-div" data-testid="code-cell" data-line-number="148" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="148" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2960px); min-height: auto;"><div><div id="LC149" class="react-file-line html-div" data-testid="code-cell" data-line-number="149" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="149" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(2980px); min-height: auto;"><div><div id="LC150" class="react-file-line html-div" data-testid="code-cell" data-line-number="150" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="label"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="htmlFor"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;end-time&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Enter End Time of the Event  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="label"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span></div></div></div><div data-key="150" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3000px); min-height: auto;"><div><div id="LC151" class="react-file-line html-div" data-testid="code-cell" data-line-number="151" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="input"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="type"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;time&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="id"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;end-time&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddEndTime"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventEndTime"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="151" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3020px); min-height: auto;"><div><div id="LC152" class="react-file-line html-div" data-testid="code-cell" data-line-number="152" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="152" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3040px); min-height: auto;"><div><div id="LC153" class="react-file-line html-div" data-testid="code-cell" data-line-number="153" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="button"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;add-event-btn&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onClick"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="onAddEventItem"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="  Add Event"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="button"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="153" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3060px); min-height: auto;"><div><div id="LC154" class="react-file-line html-div" data-testid="code-cell" data-line-number="154" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="154" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3080px); min-height: auto;"><div><div id="LC155" class="react-file-line html-div" data-testid="code-cell" data-line-number="155" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="155" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3100px); min-height: auto;"><div><div id="LC156" class="react-file-line html-div" data-testid="code-cell" data-line-number="156" style="position: relative;"><span data-code-text="    "></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="156" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3120px); min-height: auto;"><div><div id="LC157" class="react-file-line html-div" data-testid="code-cell" data-line-number="157" style="position: relative;"><span data-code-text="  "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="Popup"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="157" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3140px); min-height: auto;"><div><div id="LC158" class="react-file-line html-div" data-testid="code-cell" data-line-number="158" style="position: relative;"><span data-code-text="      "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="158" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3160px); min-height: auto;"><div><div id="LC159" class="react-file-line html-div" data-testid="code-cell" data-line-number="159" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="159" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3180px); min-height: auto;"><div><div id="LC160" class="react-file-line html-div" data-testid="code-cell" data-line-number="160" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;filter-section&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="160" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3200px); min-height: auto;"><div><div id="LC161" class="react-file-line html-div" data-testid="code-cell" data-line-number="161" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;fs-1&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="161" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3220px); min-height: auto;"><div><div id="LC162" class="react-file-line html-div" data-testid="code-cell" data-line-number="162" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="select"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;fs-dropdown&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="162" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3240px); min-height: auto;"><div><div id="LC163" class="react-file-line html-div" data-testid="code-cell" data-line-number="163" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="option"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Event Name"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="option"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="163" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3260px); min-height: auto;"><div><div id="LC164" class="react-file-line html-div" data-testid="code-cell" data-line-number="164" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="select"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="164" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3280px); min-height: auto;"><div><div id="LC165" class="react-file-line html-div" data-testid="code-cell" data-line-number="165" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;search-container&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="165" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3300px); min-height: auto;"><div><div id="LC166" class="react-file-line html-div" data-testid="code-cell" data-line-number="166" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="input"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="type"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;search&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;search-bar&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="placeholder"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&#39;Search&#39;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="onChange"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-en" data-code-text="filter"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="value"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="searchEvent"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="166" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3320px); min-height: auto;"><div><div id="LC167" class="react-file-line html-div" data-testid="code-cell" data-line-number="167" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="img"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="src"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="searchIcon"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="alt"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;searchIcon&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="167" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3340px); min-height: auto;"><div><div id="LC168" class="react-file-line html-div" data-testid="code-cell" data-line-number="168" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="168" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3360px); min-height: auto;"><div><div id="LC169" class="react-file-line html-div" data-testid="code-cell" data-line-number="169" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="169" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3380px); min-height: auto;"><div><div id="LC170" class="react-file-line html-div" data-testid="code-cell" data-line-number="170" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="button"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;fs-2&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="170" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3400px); min-height: auto;"><div><div id="LC171" class="react-file-line html-div" data-testid="code-cell" data-line-number="171" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="img"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="src"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="columns"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="alt"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;columns&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="171" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3420px); min-height: auto;"><div><div id="LC172" class="react-file-line html-div" data-testid="code-cell" data-line-number="172" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h4"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;fs2-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Columns"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h4"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="172" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3440px); min-height: auto;"><div><div id="LC173" class="react-file-line html-div" data-testid="code-cell" data-line-number="173" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="button"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="173" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3460px); min-height: auto;"><div><div id="LC174" class="react-file-line html-div" data-testid="code-cell" data-line-number="174" style="position: relative;"><span data-code-text="            "></span></div></div></div><div data-key="174" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3480px); min-height: auto;"><div><div id="LC175" class="react-file-line html-div" data-testid="code-cell" data-line-number="175" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="175" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3500px); min-height: auto;"><div><div id="LC176" class="react-file-line html-div" data-testid="code-cell" data-line-number="176" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;events-content-section&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="176" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3520px); min-height: auto;"><div><div id="LC177" class="react-file-line html-div" data-testid="code-cell" data-line-number="177" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="177" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3540px); min-height: auto;"><div><div id="LC178" class="react-file-line html-div" data-testid="code-cell" data-line-number="178" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="178" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3560px); min-height: auto;"><div><div id="LC179" class="react-file-line html-div" data-testid="code-cell" data-line-number="179" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Name"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="179" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3580px); min-height: auto;"><div><div id="LC180" class="react-file-line html-div" data-testid="code-cell" data-line-number="180" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Description"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="180" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3600px); min-height: auto;"><div><div id="LC181" class="react-file-line html-div" data-testid="code-cell" data-line-number="181" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Start Date"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="181" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3620px); min-height: auto;"><div><div id="LC182" class="react-file-line html-div" data-testid="code-cell" data-line-number="182" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="End Date"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="182" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3640px); min-height: auto;"><div><div id="LC183" class="react-file-line html-div" data-testid="code-cell" data-line-number="183" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Start Time"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="183" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3660px); min-height: auto;"><div><div id="LC184" class="react-file-line html-div" data-testid="code-cell" data-line-number="184" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;ecs-table-head-text&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="End Time"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="184" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3680px); min-height: auto;"><div><div id="LC185" class="react-file-line html-div" data-testid="code-cell" data-line-number="185" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="185" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3700px); min-height: auto;"><div><div id="LC186" class="react-file-line html-div" data-testid="code-cell" data-line-number="186" style="position: relative;"><span data-code-text="                "></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventItemList"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="length"></span><span class="pl-c1" data-code-text="!=="></span><span class="pl-c1" data-code-text="0"></span><span data-code-text=" ?"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="&gt;"></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="eventItemList"></span><span class="pl-kos" data-code-text="."></span><span class="pl-en" data-code-text="map"></span><span class="pl-kos" data-code-text="("></span><span class="pl-s1" data-code-text="each"></span><span class="pl-c1" data-code-text="=&gt;"></span><span class="pl-kos" data-code-text="("></span></div></div></div><div data-key="186" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3720px); min-height: auto;"><div><div id="LC187" class="react-file-line html-div" data-testid="code-cell" data-line-number="187" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="EventItem"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="item"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="each"></span><span class="pl-kos" data-code-text="}"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="key"></span><span class="pl-c1" data-code-text="="></span><span class="pl-kos" data-code-text="{"></span><span class="pl-s1" data-code-text="each"></span><span class="pl-kos" data-code-text="."></span><span class="pl-c1" data-code-text="id"></span><span class="pl-kos" data-code-text="}"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="187" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3740px); min-height: auto;"><div><div id="LC188" class="react-file-line html-div" data-testid="code-cell" data-line-number="188" style="position: relative;"><span data-code-text="                "></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text=")"></span><span class="pl-kos" data-code-text="}"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" : "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="div"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="className"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;empty-view-section&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="188" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3760px); min-height: auto;"><div><div id="LC189" class="react-file-line html-div" data-testid="code-cell" data-line-number="189" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="svg"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="xmlns"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;http://www.w3.org/2000/svg&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;86&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="height"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;50&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="viewBox"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;0 0 86 50&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;none&quot;"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="189" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3780px); min-height: auto;"><div><div id="LC190" class="react-file-line html-div" data-testid="code-cell" data-line-number="190" style="position: relative;"><span data-code-text="                        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="path"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="d"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;M34.2311 9.36423C35.8642 8.42149 36.6807 7.95011 37.6953 7.95011C38.7099 7.95011 39.5265 8.42149 41.1595 9.36423L69.5865 25.7751C71.2195 26.7179 72.036 27.1893 72.036 27.775C72.036 28.3608 71.2195 28.8321 69.5865 29.7749L65.0779 32.3777C64.6696 32.6134 64.4655 32.7312 64.2118 32.7312C63.9582 32.7312 63.754 32.6134 63.3458 32.3777L29.7225 12.967C29.3143 12.7313 29.1101 12.6135 29.1101 12.467C29.1101 12.3206 29.3143 12.2027 29.7225 11.9671L34.2311 9.36423Z&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;#69C39F&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="190" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3800px); min-height: auto;"><div><div id="LC191" class="react-file-line html-div" data-testid="code-cell" data-line-number="191" style="position: relative;"><span data-code-text="                        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="path"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill-rule"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;evenodd&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="clip-rule"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;evenodd&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="d"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;M11.1107 22.7135C9.4777 23.6563 8.66118 24.1277 8.66118 24.7134C8.66118 25.2992 9.4777 25.7705 11.1107 26.7133L39.5377 43.1242C41.1707 44.0669 41.9873 44.5383 43.0019 44.5383C44.0165 44.5383 44.833 44.0669 46.4661 43.1242L59.8135 35.4187C60.2218 35.183 60.4259 35.0652 60.4259 34.9187C60.4259 34.7723 60.2218 34.6544 59.8135 34.4188L26.1903 15.0081C25.782 14.7724 25.5779 14.6545 25.3242 14.6545C25.0706 14.6545 24.8664 14.7724 24.4582 15.0081L11.1107 22.7135ZM29.7615 22.1518C30.1697 21.9161 30.3739 21.7982 30.6275 21.7982C30.8812 21.7982 31.0853 21.9161 31.4936 22.1518L36.8325 25.234C37.2408 25.4697 37.4449 25.5875 37.4449 25.7339C37.4449 25.8804 37.2408 25.9982 36.8325 26.2339L35.0291 27.275C34.6208 27.5107 34.4167 27.6286 34.1631 27.6286C33.9094 27.6286 33.7053 27.5107 33.297 27.275L27.958 24.1928C27.5498 23.9572 27.3456 23.8393 27.3456 23.6929C27.3456 23.5464 27.5498 23.4286 27.958 23.1929L29.7615 22.1518ZM23.5565 25.8804C23.3028 25.8804 23.0987 25.9982 22.6904 26.2339L20.887 27.275C20.4787 27.5107 20.2746 27.6286 20.2746 27.775C20.2746 27.9214 20.4787 28.0393 20.887 28.275L26.2259 31.3572C26.6342 31.5929 26.8383 31.7107 27.092 31.7107C27.3456 31.7107 27.5498 31.5929 27.958 31.3572L29.7615 30.316C30.1697 30.0803 30.3739 29.9625 30.3739 29.8161C30.3739 29.6696 30.1697 29.5518 29.7615 29.3161L24.4225 26.2339C24.0142 25.9982 23.8101 25.8804 23.5565 25.8804ZM40.3681 28.275C40.7763 28.0393 40.9805 27.9214 41.2341 27.9214C41.4878 27.9214 41.6919 28.0393 42.1002 28.275L47.4391 31.3572C47.8474 31.5928 48.0515 31.7107 48.0515 31.8571C48.0515 32.0036 47.8474 32.1214 47.4391 32.3571L45.6357 33.3982C45.2274 33.6339 45.0233 33.7518 44.7697 33.7518C44.516 33.7518 44.3119 33.6339 43.9036 33.3982L38.5646 30.316C38.1564 30.0803 37.9522 29.9625 37.9522 29.8161C37.9522 29.6696 38.1564 29.5518 38.5646 29.3161L40.3681 28.275ZM34.1631 32.0036C33.9094 32.0036 33.7053 32.1214 33.297 32.3571L31.4936 33.3982C31.0853 33.6339 30.8812 33.7518 30.8812 33.8982C30.8812 34.0446 31.0853 34.1625 31.4936 34.3982L36.8325 37.4804C37.2408 37.716 37.4449 37.8339 37.6986 37.8339C37.9522 37.8339 38.1564 37.716 38.5646 37.4804L40.3681 36.4392C40.7763 36.2035 40.9805 36.0857 40.9805 35.9393C40.9805 35.7928 40.7763 35.675 40.3681 35.4393L35.0291 32.3571C34.6208 32.1214 34.4167 32.0036 34.1631 32.0036Z&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="fill"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;#69C39F&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="191" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3820px); min-height: auto;"><div><div id="LC192" class="react-file-line html-div" data-testid="code-cell" data-line-number="192" style="position: relative;"><span data-code-text="                        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="path"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="d"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;M50.0703 10.426L44.767 13.4876&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;#69C39F&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;2&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-linecap"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;round&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="192" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3840px); min-height: auto;"><div><div id="LC193" class="react-file-line html-div" data-testid="code-cell" data-line-number="193" style="position: relative;"><span data-code-text="                        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="path"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="d"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;M67.75 20.6313L62.4467 23.6929&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;#69C39F&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-width"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;2&quot;"></span><span data-code-text=" "></span><span class="pl-c1" data-code-text="stroke-linecap"></span><span class="pl-c1" data-code-text="="></span><span class="pl-s" data-code-text="&quot;round&quot;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="193" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3860px); min-height: auto;"><div><div id="LC194" class="react-file-line html-div" data-testid="code-cell" data-line-number="194" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="svg"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="194" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3880px); min-height: auto;"><div><div id="LC195" class="react-file-line html-div" data-testid="code-cell" data-line-number="195" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="No Events"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="h1"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="195" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3900px); min-height: auto;"><div><div id="LC196" class="react-file-line html-div" data-testid="code-cell" data-line-number="196" style="position: relative;"><span data-code-text="                    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-ent" data-code-text="p"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text="Add Your First Event"></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="p"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="196" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3920px); min-height: auto;"><div><div id="LC197" class="react-file-line html-div" data-testid="code-cell" data-line-number="197" style="position: relative;"><span data-code-text="                "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span><span data-code-text=" "></span><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="197" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3940px); min-height: auto;"><div><div id="LC198" class="react-file-line html-div" data-testid="code-cell" data-line-number="198" style="position: relative;"><span data-code-text="            "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="198" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3960px); min-height: auto;"><div><div id="LC199" class="react-file-line html-div" data-testid="code-cell" data-line-number="199" style="position: relative;"><span data-code-text="        "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="199" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(3980px); min-height: auto;"><div><div id="LC200" class="react-file-line html-div" data-testid="code-cell" data-line-number="200" style="position: relative;"><span data-code-text="    "></span><span class="pl-c1" data-code-text="&lt;"></span><span class="pl-c1" data-code-text="/"></span><span class="pl-ent" data-code-text="div"></span><span class="pl-c1" data-code-text="&gt;"></span></div></div></div><div data-key="200" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(4000px); min-height: auto;"><div><div id="LC201" class="react-file-line html-div" data-testid="code-cell" data-line-number="201" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="201" class="child-of-line-12  react-code-text react-code-line-contents virtual" style="transform: translateY(4020px); min-height: auto;"><div><div id="LC202" class="react-file-line html-div" data-testid="code-cell" data-line-number="202" style="position: relative;"><span data-code-text="  "></span><span class="pl-kos" data-code-text=")"></span></div></div></div><div data-key="202" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4040px); min-height: auto;"><div><div id="LC203" class="react-file-line html-div" data-testid="code-cell" data-line-number="203" style="position: relative;"><span class="pl-kos" data-code-text="}"></span></div></div></div><div data-key="203" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4060px); min-height: auto;"><div><div id="LC204" class="react-file-line html-div" data-testid="code-cell" data-line-number="204" style="position: relative;"><span data-code-text="
"></span></div></div></div><div data-key="204" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4080px); min-height: auto;"><div><div id="LC205" class="react-file-line html-div" data-testid="code-cell" data-line-number="205" style="position: relative;"><span class="pl-k" data-code-text="export"></span><span data-code-text=" "></span><span class="pl-k" data-code-text="default"></span><span data-code-text=" "></span><span class="pl-v" data-code-text="Events"></span></div></div></div></div><button hidden="" data-hotkey="Control+a"></button><div aria-hidden="true" data-testid="navigation-cursor" class="Box-sc-g0xbh4-0 code-navigation-cursor" style="top: 0px; left: 92px;"> </div><button hidden="" data-testid="NavigationCursorEnter" data-hotkey="Control+Enter" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightedLine" data-hotkey="Shift+J" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightAndExpandMenu" data-hotkey="Alt+Shift+C,Alt+Shift+Ç" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageDown" data-hotkey="PageDown" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageUp" data-hotkey="PageUp" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div><div class="Box-sc-g0xbh4-0 ewSOmp"><div class="Box-sc-g0xbh4-0 jveRRF"></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div></section></div></div></div>   </div></div></div><div class="Box-sc-g0xbh4-0"></div></div></div></div></div><div id="find-result-marks-container" class="Box-sc-g0xbh4-0 aZrVR"></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+F6,Control+Shift+F6"></button><button hidden="" data-hotkey="Control+F6,Control+Shift+F6"></button></div> <!-- --> <!-- --> <!-- --> <script type="application/json" id="__PRIMER_DATA__">{"resolvedServerColorMode":"day"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com/">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
</svg>
</a>
      <span>
        © 2024 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer">
      <h3 class="sr-only" id="sr-footer-heading">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link">Contact</a>
          </li>

          <li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement">
      Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>




    <cookie-consent id="cookie-consent-banner" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></cookie-consent>


  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>


    <style>
      .user-mention[href$="/sravan321-hub"] {
        color: var(--color-user-mention-fg);
        background-color: var(--color-user-mention-bg);
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
        padding: 0 2px;
      }
    </style>


    </div>

    <div id="js-global-screen-reader-notice" class="sr-only" aria-live="polite" aria-atomic="true">Task_1/src/components/Events/index.js at main · acl2003/Task_1</div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only" aria-live="assertive" aria-atomic="true"></div>
  


<div class="sr-only" id="screenReaderAnnouncementDiv" role="alert" aria-live="assertive">&nbsp;</div></body></html>