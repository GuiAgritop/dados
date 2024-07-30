ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5166864.402724, -2673514.549671, -5007013.881880, -2603186.049909]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.812000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ZONACENTRO_2 = new ol.format.GeoJSON();
var features_ZONACENTRO_2 = format_ZONACENTRO_2.readFeatures(json_ZONACENTRO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONACENTRO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONACENTRO_2.addFeatures(features_ZONACENTRO_2);
var lyr_ZONACENTRO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONACENTRO_2, 
                style: style_ZONACENTRO_2,
                popuplayertitle: "ZONA CENTRO",
                interactive: true,
                title: '<img src="styles/legend/ZONACENTRO_2.png" /> ZONA CENTRO'
            });
var format_ZONASUDESTE_3 = new ol.format.GeoJSON();
var features_ZONASUDESTE_3 = format_ZONASUDESTE_3.readFeatures(json_ZONASUDESTE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASUDESTE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASUDESTE_3.addFeatures(features_ZONASUDESTE_3);
var lyr_ZONASUDESTE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONASUDESTE_3, 
                style: style_ZONASUDESTE_3,
                popuplayertitle: "ZONA SUDESTE",
                interactive: true,
                title: '<img src="styles/legend/ZONASUDESTE_3.png" /> ZONA SUDESTE'
            });
var format_ZONAOESTE_4 = new ol.format.GeoJSON();
var features_ZONAOESTE_4 = format_ZONAOESTE_4.readFeatures(json_ZONAOESTE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAOESTE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAOESTE_4.addFeatures(features_ZONAOESTE_4);
var lyr_ZONAOESTE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAOESTE_4, 
                style: style_ZONAOESTE_4,
                popuplayertitle: "ZONA OESTE",
                interactive: true,
                title: '<img src="styles/legend/ZONAOESTE_4.png" /> ZONA OESTE'
            });
var format_ZONASUL_5 = new ol.format.GeoJSON();
var features_ZONASUL_5 = format_ZONASUL_5.readFeatures(json_ZONASUL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASUL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASUL_5.addFeatures(features_ZONASUL_5);
var lyr_ZONASUL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONASUL_5, 
                style: style_ZONASUL_5,
                popuplayertitle: "ZONA SUL",
                interactive: true,
                title: '<img src="styles/legend/ZONASUL_5.png" /> ZONA SUL'
            });
var format_ZONALESTE_6 = new ol.format.GeoJSON();
var features_ZONALESTE_6 = format_ZONALESTE_6.readFeatures(json_ZONALESTE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONALESTE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONALESTE_6.addFeatures(features_ZONALESTE_6);
var lyr_ZONALESTE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONALESTE_6, 
                style: style_ZONALESTE_6,
                popuplayertitle: "ZONA LESTE",
                interactive: true,
                title: '<img src="styles/legend/ZONALESTE_6.png" /> ZONA LESTE'
            });
var format_ZONANORTE_7 = new ol.format.GeoJSON();
var features_ZONANORTE_7 = format_ZONANORTE_7.readFeatures(json_ZONANORTE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONANORTE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONANORTE_7.addFeatures(features_ZONANORTE_7);
var lyr_ZONANORTE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONANORTE_7, 
                style: style_ZONANORTE_7,
                popuplayertitle: "ZONA NORTE",
                interactive: true,
                title: '<img src="styles/legend/ZONANORTE_7.png" /> ZONA NORTE'
            });
var format_SJC_8 = new ol.format.GeoJSON();
var features_SJC_8 = format_SJC_8.readFeatures(json_SJC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJC_8.addFeatures(features_SJC_8);
var lyr_SJC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJC_8, 
                style: style_SJC_8,
                popuplayertitle: "SJC",
                interactive: true,
                title: '<img src="styles/legend/SJC_8.png" /> SJC'
            });
var format_DISTRITOS_SJC_9 = new ol.format.GeoJSON();
var features_DISTRITOS_SJC_9 = format_DISTRITOS_SJC_9.readFeatures(json_DISTRITOS_SJC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS_SJC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_SJC_9.addFeatures(features_DISTRITOS_SJC_9);
var lyr_DISTRITOS_SJC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRITOS_SJC_9, 
                style: style_DISTRITOS_SJC_9,
                popuplayertitle: "DISTRITOS_SJC",
                interactive: true,
                title: '<img src="styles/legend/DISTRITOS_SJC_9.png" /> DISTRITOS_SJC'
            });
var format_ClColonial_10 = new ol.format.GeoJSON();
var features_ClColonial_10 = format_ClColonial_10.readFeatures(json_ClColonial_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClColonial_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClColonial_10.addFeatures(features_ClColonial_10);
var lyr_ClColonial_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClColonial_10, 
                style: style_ClColonial_10,
                popuplayertitle: "Clã Colonial",
                interactive: true,
                title: '<img src="styles/legend/ClColonial_10.png" /> Clã Colonial'
            });
var format_ClBosquedosIps_11 = new ol.format.GeoJSON();
var features_ClBosquedosIps_11 = format_ClBosquedosIps_11.readFeatures(json_ClBosquedosIps_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClBosquedosIps_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClBosquedosIps_11.addFeatures(features_ClBosquedosIps_11);
var lyr_ClBosquedosIps_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClBosquedosIps_11, 
                style: style_ClBosquedosIps_11,
                popuplayertitle: "Clã Bosque dos Ipês",
                interactive: true,
                title: '<img src="styles/legend/ClBosquedosIps_11.png" /> Clã Bosque dos Ipês'
            });
var format_ClInflood_12 = new ol.format.GeoJSON();
var features_ClInflood_12 = format_ClInflood_12.readFeatures(json_ClInflood_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClInflood_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClInflood_12.addFeatures(features_ClInflood_12);
var lyr_ClInflood_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClInflood_12, 
                style: style_ClInflood_12,
                popuplayertitle: "Clã Inflood",
                interactive: true,
                title: '<img src="styles/legend/ClInflood_12.png" /> Clã Inflood'
            });
var format_ClParqueIndustrial_13 = new ol.format.GeoJSON();
var features_ClParqueIndustrial_13 = format_ClParqueIndustrial_13.readFeatures(json_ClParqueIndustrial_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClParqueIndustrial_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClParqueIndustrial_13.addFeatures(features_ClParqueIndustrial_13);
var lyr_ClParqueIndustrial_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClParqueIndustrial_13, 
                style: style_ClParqueIndustrial_13,
                popuplayertitle: "Clã Parque Industrial",
                interactive: true,
                title: '<img src="styles/legend/ClParqueIndustrial_13.png" /> Clã Parque Industrial'
            });
var format_ClJddasIndustrias_14 = new ol.format.GeoJSON();
var features_ClJddasIndustrias_14 = format_ClJddasIndustrias_14.readFeatures(json_ClJddasIndustrias_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClJddasIndustrias_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClJddasIndustrias_14.addFeatures(features_ClJddasIndustrias_14);
var lyr_ClJddasIndustrias_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClJddasIndustrias_14, 
                style: style_ClJddasIndustrias_14,
                popuplayertitle: "Clã Jd. das Industrias",
                interactive: true,
                title: '<img src="styles/legend/ClJddasIndustrias_14.png" /> Clã Jd. das Industrias'
            });
var format_IGREJABURN_15 = new ol.format.GeoJSON();
var features_IGREJABURN_15 = format_IGREJABURN_15.readFeatures(json_IGREJABURN_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IGREJABURN_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IGREJABURN_15.addFeatures(features_IGREJABURN_15);
var lyr_IGREJABURN_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IGREJABURN_15, 
                style: style_IGREJABURN_15,
                popuplayertitle: "IGREJA BURN",
                interactive: true,
                title: '<img src="styles/legend/IGREJABURN_15.png" /> IGREJA BURN'
            });
var group_RAIO_13e5KM = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "RAIO_1,3 e 5KM"});
var group_CLS_SJC = new ol.layer.Group({
                                layers: [lyr_ClColonial_10,lyr_ClBosquedosIps_11,lyr_ClInflood_12,lyr_ClParqueIndustrial_13,lyr_ClJddasIndustrias_14,],
                                fold: "open",
                                title: "CLÃS_SJC"});
var group_MEMBROSPORCL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MEMBROS POR CLÃ"});
var group_ESPACIALIDADESSJC = new ol.layer.Group({
                                layers: [lyr_SJC_8,lyr_DISTRITOS_SJC_9,],
                                fold: "open",
                                title: "ESPACIALIDADES SJC"});
var group_ZONASSJC = new ol.layer.Group({
                                layers: [lyr_ZONACENTRO_2,lyr_ZONASUDESTE_3,lyr_ZONAOESTE_4,lyr_ZONASUL_5,lyr_ZONALESTE_6,lyr_ZONANORTE_7,],
                                fold: "open",
                                title: "ZONAS SJC"});
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "group1"});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_ZONACENTRO_2.setVisible(true);lyr_ZONASUDESTE_3.setVisible(true);lyr_ZONAOESTE_4.setVisible(true);lyr_ZONASUL_5.setVisible(true);lyr_ZONALESTE_6.setVisible(true);lyr_ZONANORTE_7.setVisible(true);lyr_SJC_8.setVisible(true);lyr_DISTRITOS_SJC_9.setVisible(true);lyr_ClColonial_10.setVisible(true);lyr_ClBosquedosIps_11.setVisible(true);lyr_ClInflood_12.setVisible(true);lyr_ClParqueIndustrial_13.setVisible(true);lyr_ClJddasIndustrias_14.setVisible(true);lyr_IGREJABURN_15.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,group_ZONASSJC,group_ESPACIALIDADESSJC,group_CLS_SJC,lyr_IGREJABURN_15];
lyr_ZONACENTRO_2.set('fieldAliases', {'id': 'id', });
lyr_ZONASUDESTE_3.set('fieldAliases', {'id': 'id', });
lyr_ZONAOESTE_4.set('fieldAliases', {'id': 'id', });
lyr_ZONASUL_5.set('fieldAliases', {'id': 'id', });
lyr_ZONALESTE_6.set('fieldAliases', {'id': 'id', });
lyr_ZONANORTE_7.set('fieldAliases', {'id': 'id', });
lyr_SJC_8.set('fieldAliases', {'NM_MUN': 'NM_MUN', });
lyr_DISTRITOS_SJC_9.set('fieldAliases', {'id': 'id', 'distrito': 'distrito', });
lyr_ClColonial_10.set('fieldAliases', {'id': 'id', });
lyr_ClBosquedosIps_11.set('fieldAliases', {'id': 'id', });
lyr_ClInflood_12.set('fieldAliases', {'id': 'id', });
lyr_ClParqueIndustrial_13.set('fieldAliases', {'id': 'id', });
lyr_ClJddasIndustrias_14.set('fieldAliases', {'id': 'id', });
lyr_IGREJABURN_15.set('fieldAliases', {'id': 'id', });
lyr_ZONACENTRO_2.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONASUDESTE_3.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONAOESTE_4.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONASUL_5.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONALESTE_6.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONANORTE_7.set('fieldImages', {'id': 'TextEdit', });
lyr_SJC_8.set('fieldImages', {'NM_MUN': 'TextEdit', });
lyr_DISTRITOS_SJC_9.set('fieldImages', {'id': 'Range', 'distrito': 'TextEdit', });
lyr_ClColonial_10.set('fieldImages', {'id': 'TextEdit', });
lyr_ClBosquedosIps_11.set('fieldImages', {'id': 'TextEdit', });
lyr_ClInflood_12.set('fieldImages', {'id': 'TextEdit', });
lyr_ClParqueIndustrial_13.set('fieldImages', {'id': 'TextEdit', });
lyr_ClJddasIndustrias_14.set('fieldImages', {'id': 'TextEdit', });
lyr_IGREJABURN_15.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONACENTRO_2.set('fieldLabels', {'id': 'no label', });
lyr_ZONASUDESTE_3.set('fieldLabels', {'id': 'no label', });
lyr_ZONAOESTE_4.set('fieldLabels', {'id': 'no label', });
lyr_ZONASUL_5.set('fieldLabels', {'id': 'no label', });
lyr_ZONALESTE_6.set('fieldLabels', {'id': 'no label', });
lyr_ZONANORTE_7.set('fieldLabels', {'id': 'no label', });
lyr_SJC_8.set('fieldLabels', {'NM_MUN': 'no label', });
lyr_DISTRITOS_SJC_9.set('fieldLabels', {'id': 'no label', 'distrito': 'no label', });
lyr_ClColonial_10.set('fieldLabels', {'id': 'no label', });
lyr_ClBosquedosIps_11.set('fieldLabels', {'id': 'no label', });
lyr_ClInflood_12.set('fieldLabels', {'id': 'no label', });
lyr_ClParqueIndustrial_13.set('fieldLabels', {'id': 'no label', });
lyr_ClJddasIndustrias_14.set('fieldLabels', {'id': 'no label', });
lyr_IGREJABURN_15.set('fieldLabels', {'id': 'no label', });
lyr_IGREJABURN_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});