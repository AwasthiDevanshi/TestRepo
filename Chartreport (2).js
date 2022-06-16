function charts(chartid,charttype,alignThresholds,alignTicks, chartanimationdefer,chartanimationduration,zoomtype,panning, panningtype,
                pankey,displayerrors, showAxes,spacing, borderColor, borderWidth,borderRadius, title, titlealign,xvisible, xaxisvalue, xaxistype, xaxistitle,
                xaxislabels,yvisible,yaxismin,yaxismax, yaxistitle,legend,legendborderColor, legendborderRadius, legendborderWidth,tooltip_pointformat, data, Polling, 
                dataRefreshRate,seriesname,pointselect,plotanimationdefer, plotanimationduration,colorByPoint,
                seriescolor, datalabels, datalabelsinside, datalabelsalign, datalabelsallowOverlap, datalabelsformat) { 
Highcharts.chart(chartid, {
    chart: {
          type: charttype,
          alignThresholds: alignThresholds,
          alignTicks: alignTicks,
          animation:{  
            defer:chartanimationdefer,  
            duration:chartanimationduration
        }, 
        zoomType: zoomtype,
        panning: {
            enabled: panning,
            type: panningtype
        },
        panKey: pankey,
        displayErrors: displayerrors,
        showAxes: showAxes,
        spacing:spacing, 
        borderColor:borderColor,
        borderWidth:borderWidth,
        borderRadius:borderRadius
      },
      title: {
          text: title,
          align: titlealign
      },
      
      xAxis: {
        visible: xvisible,
          title: {
            text: xaxistitle
          },
          type: xaxistype,
          category: xaxisvalue,
          labels: {
              enabled: xaxislabels,
          }
      },
      yAxis: {
        visible: yvisible,
          min: yaxismin,
          max: yaxismax,
          title: {
              text: yaxistitle
          }
      },
      legend: {
          enabled: legend,
          borderColor:legendborderColor,
          borderRadius:legendborderRadius,
          borderWidth:legendborderWidth
      },
      tooltip: {
          pointFormat: tooltip_pointformat
      },
      data: {
        csv: data,
        enablePolling: Polling,   // automatic refetch remote datasets every n seconds 
        dataRefreshRate: dataRefreshRate     // time in seconds
      },
      series: [{
          name: seriesname,
    }],
    plotOptions:{
        allowPointSelect:pointselect,
        animation:{  
            defer:plotanimationdefer,  
            duration:plotanimationduration
        }, 
        series:{
            colorByPoint:colorByPoint,
            colors:seriescolor,
            dataLabels: {
                enabled: datalabels,
                inside: datalabelsinside,
                align: datalabelsalign,
                allowOverlap:datalabelsallowOverlap,
                format: datalabelsformat
            },
        },
        
    }

  });};

function drilldown(chartID,type,alignThresholds,alignTicks, chartanimationdefer,chartanimationduration, 
                     zoomtype,panning, panningtype,pankey,displayerrors, showAxes, spacing, borderColor, borderWidth,
                     borderRadius, title,titlealign, xvisible, xaxistype, xaxistitle,
                     xaxislabels,yvisible,yaxismin,yaxismax, yaxistitle,legend,legendborderColor,
                     legendborderRadius, legendborderWidth, tooltip_headerformat, tooltip_pointformat, 
                     Polling, dataRefreshRate,seriesname,pointselect,plotanimationdefer, plotanimationduration,
                     colorByPoint, seriescolor, datalabels, datalabelsinside, datalabelsalign, 
                     datalabelsallowOverlap, datalabelsformat, drilldata, drilldown_data){
  Highcharts.chart(chartID, {
    chart: {
        type: type,
        alignThresholds: alignThresholds,
        alignTicks: alignTicks,
        animation:{  
          defer:chartanimationdefer,  
          duration:chartanimationduration
      }, 
      zoomType: zoomtype,
      panning: {
          enabled: panning,
          type: panningtype
      },
      panKey: pankey,
      displayErrors: displayerrors,
      showAxes: showAxes,
      spacing:spacing, 
      borderColor:borderColor,
      borderWidth:borderWidth,
      borderRadius:borderRadius
    },
    title: {
        text: title,
        align: titlealign
    },
    
    xAxis: {
      visible: xvisible,
        title: {
          text: xaxistitle
        },
        type: xaxistype,
        labels: {
            enabled: xaxislabels,
        }
    },
    yAxis: {
      visible: yvisible,
        min: yaxismin,
        max: yaxismax,
        title: {
            text: yaxistitle
        }
    },
    legend: {
        enabled: legend,
        borderColor:legendborderColor,
        borderRadius:legendborderRadius,
        borderWidth:legendborderWidth
    },
    tooltip: {
        headerFormat: tooltip_headerformat,
        pointFormat: tooltip_pointformat
    },
    plotOptions:{
        allowPointSelect:pointselect,
        animation:{  
            defer:plotanimationdefer,  
            duration:plotanimationduration
        },
        series:{
            dataLabels: {
                enabled: datalabels,
                inside: datalabelsinside,
                align: datalabelsalign,
                allowOverlap:datalabelsallowOverlap,
                format: datalabelsformat
            },
        },
        
    }, 

    series: [{
            name: seriesname,
            colorByPoint:colorByPoint,
            colors:seriescolor,
            data: drilldata,
            enablePolling: Polling,   // automatic refetch remote datasets every n seconds 
            dataRefreshRate: dataRefreshRate     // time in seconds
        }],
    drilldown: {
        series: drilldown_data
    }
});};
