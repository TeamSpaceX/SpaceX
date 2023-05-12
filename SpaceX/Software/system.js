import { channels, channelNames } from "./channels.js";

$(document).ready(function() {
    const params = (new URL(document.location)).searchParams;
    const system = params.get("system");
    const systemConf = channels[system];
    const channelID = systemConf.channelID;
    
    const titleElement = $(".system-name");
    titleElement.text(channelNames[system]);

    const chartElemet = $("#chart");
    chartElemet.attr("src", "https://thingspeak.com/channels/"+channelID+"/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15");

    const gaugeElement = $("#gauge");
    gaugeElement.attr("src", "https://thingspeak.com/channels/"+channelID+"/widgets/"+systemConf.gaugeID);

    const alternameWidgetElement = $("#alt_widget");
    alternameWidgetElement.attr("src", "https://thingspeak.com/channels/"+channelID+"/widgets/"+systemConf.alternateWidgetID);
});
