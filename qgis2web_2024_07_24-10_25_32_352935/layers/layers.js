ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32723").setExtent([388246.144221, 7419237.732479, 428331.547243, 7438326.019632]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.836000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RAIO1KM_1 = new ol.format.GeoJSON();
var features_RAIO1KM_1 = format_RAIO1KM_1.readFeatures(json_RAIO1KM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_1.addFeatures(features_RAIO1KM_1);
var lyr_RAIO1KM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_1, 
                style: style_RAIO1KM_1,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_1.png" /> RAIO 1KM'
            });
var format_RAIO1KM_2 = new ol.format.GeoJSON();
var features_RAIO1KM_2 = format_RAIO1KM_2.readFeatures(json_RAIO1KM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_2.addFeatures(features_RAIO1KM_2);
var lyr_RAIO1KM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_2, 
                style: style_RAIO1KM_2,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_2.png" /> RAIO 1KM'
            });
var format_RAIO1KM_3 = new ol.format.GeoJSON();
var features_RAIO1KM_3 = format_RAIO1KM_3.readFeatures(json_RAIO1KM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_3.addFeatures(features_RAIO1KM_3);
var lyr_RAIO1KM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_3, 
                style: style_RAIO1KM_3,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_3.png" /> RAIO 1KM'
            });
var format_RAIO1KM_4 = new ol.format.GeoJSON();
var features_RAIO1KM_4 = format_RAIO1KM_4.readFeatures(json_RAIO1KM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_4.addFeatures(features_RAIO1KM_4);
var lyr_RAIO1KM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_4, 
                style: style_RAIO1KM_4,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_4.png" /> RAIO 1KM'
            });
var format_RAIO1KM_5 = new ol.format.GeoJSON();
var features_RAIO1KM_5 = format_RAIO1KM_5.readFeatures(json_RAIO1KM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_5.addFeatures(features_RAIO1KM_5);
var lyr_RAIO1KM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_5, 
                style: style_RAIO1KM_5,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_5.png" /> RAIO 1KM'
            });
var format_RAIO1KM_6 = new ol.format.GeoJSON();
var features_RAIO1KM_6 = format_RAIO1KM_6.readFeatures(json_RAIO1KM_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_6.addFeatures(features_RAIO1KM_6);
var lyr_RAIO1KM_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_6, 
                style: style_RAIO1KM_6,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_6.png" /> RAIO 1KM'
            });
var format_RAIO1KM_7 = new ol.format.GeoJSON();
var features_RAIO1KM_7 = format_RAIO1KM_7.readFeatures(json_RAIO1KM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_7.addFeatures(features_RAIO1KM_7);
var lyr_RAIO1KM_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_7, 
                style: style_RAIO1KM_7,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_7.png" /> RAIO 1KM'
            });
var format_RAIO1KM_8 = new ol.format.GeoJSON();
var features_RAIO1KM_8 = format_RAIO1KM_8.readFeatures(json_RAIO1KM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_RAIO1KM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAIO1KM_8.addFeatures(features_RAIO1KM_8);
var lyr_RAIO1KM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAIO1KM_8, 
                style: style_RAIO1KM_8,
                popuplayertitle: "RAIO 1KM",
                interactive: true,
                title: '<img src="styles/legend/RAIO1KM_8.png" /> RAIO 1KM'
            });
var format_ZONACENTRO_9 = new ol.format.GeoJSON();
var features_ZONACENTRO_9 = format_ZONACENTRO_9.readFeatures(json_ZONACENTRO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ZONACENTRO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONACENTRO_9.addFeatures(features_ZONACENTRO_9);
var lyr_ZONACENTRO_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONACENTRO_9, 
                style: style_ZONACENTRO_9,
                popuplayertitle: "ZONA CENTRO",
                interactive: true,
                title: '<img src="styles/legend/ZONACENTRO_9.png" /> ZONA CENTRO'
            });
var format_ZONASUDESTE_10 = new ol.format.GeoJSON();
var features_ZONASUDESTE_10 = format_ZONASUDESTE_10.readFeatures(json_ZONASUDESTE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ZONASUDESTE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASUDESTE_10.addFeatures(features_ZONASUDESTE_10);
var lyr_ZONASUDESTE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONASUDESTE_10, 
                style: style_ZONASUDESTE_10,
                popuplayertitle: "ZONA SUDESTE",
                interactive: true,
                title: '<img src="styles/legend/ZONASUDESTE_10.png" /> ZONA SUDESTE'
            });
var format_ZONAOESTE_11 = new ol.format.GeoJSON();
var features_ZONAOESTE_11 = format_ZONAOESTE_11.readFeatures(json_ZONAOESTE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ZONAOESTE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAOESTE_11.addFeatures(features_ZONAOESTE_11);
var lyr_ZONAOESTE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAOESTE_11, 
                style: style_ZONAOESTE_11,
                popuplayertitle: "ZONA OESTE",
                interactive: true,
                title: '<img src="styles/legend/ZONAOESTE_11.png" /> ZONA OESTE'
            });
var format_ZONASUL_12 = new ol.format.GeoJSON();
var features_ZONASUL_12 = format_ZONASUL_12.readFeatures(json_ZONASUL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ZONASUL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASUL_12.addFeatures(features_ZONASUL_12);
var lyr_ZONASUL_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONASUL_12, 
                style: style_ZONASUL_12,
                popuplayertitle: "ZONA SUL",
                interactive: true,
                title: '<img src="styles/legend/ZONASUL_12.png" /> ZONA SUL'
            });
var format_ZONALESTE_13 = new ol.format.GeoJSON();
var features_ZONALESTE_13 = format_ZONALESTE_13.readFeatures(json_ZONALESTE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ZONALESTE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONALESTE_13.addFeatures(features_ZONALESTE_13);
var lyr_ZONALESTE_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONALESTE_13, 
                style: style_ZONALESTE_13,
                popuplayertitle: "ZONA LESTE",
                interactive: true,
                title: '<img src="styles/legend/ZONALESTE_13.png" /> ZONA LESTE'
            });
var format_ZONANORTE_14 = new ol.format.GeoJSON();
var features_ZONANORTE_14 = format_ZONANORTE_14.readFeatures(json_ZONANORTE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ZONANORTE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONANORTE_14.addFeatures(features_ZONANORTE_14);
var lyr_ZONANORTE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONANORTE_14, 
                style: style_ZONANORTE_14,
                popuplayertitle: "ZONA NORTE",
                interactive: true,
                title: '<img src="styles/legend/ZONANORTE_14.png" /> ZONA NORTE'
            });
var format_FazendasStios_15 = new ol.format.GeoJSON();
var features_FazendasStios_15 = format_FazendasStios_15.readFeatures(json_FazendasStios_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_FazendasStios_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendasStios_15.addFeatures(features_FazendasStios_15);
var lyr_FazendasStios_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendasStios_15, 
                style: style_FazendasStios_15,
                popuplayertitle: "Fazendas/Sítios",
                interactive: true,
                title: '<img src="styles/legend/FazendasStios_15.png" /> Fazendas/Sítios'
            });
var format_SJC_16 = new ol.format.GeoJSON();
var features_SJC_16 = format_SJC_16.readFeatures(json_SJC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_SJC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJC_16.addFeatures(features_SJC_16);
var lyr_SJC_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJC_16, 
                style: style_SJC_16,
                popuplayertitle: "SJC",
                interactive: true,
                title: '<img src="styles/legend/SJC_16.png" /> SJC'
            });
var format_BAIRROS_IRREGULARES_17 = new ol.format.GeoJSON();
var features_BAIRROS_IRREGULARES_17 = format_BAIRROS_IRREGULARES_17.readFeatures(json_BAIRROS_IRREGULARES_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_BAIRROS_IRREGULARES_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_IRREGULARES_17.addFeatures(features_BAIRROS_IRREGULARES_17);
var lyr_BAIRROS_IRREGULARES_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_IRREGULARES_17, 
                style: style_BAIRROS_IRREGULARES_17,
                popuplayertitle: "BAIRROS_IRREGULARES",
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_IRREGULARES_17.png" /> BAIRROS_IRREGULARES'
            });
var format_BAIRROS_SJC_18 = new ol.format.GeoJSON();
var features_BAIRROS_SJC_18 = format_BAIRROS_SJC_18.readFeatures(json_BAIRROS_SJC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_BAIRROS_SJC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROS_SJC_18.addFeatures(features_BAIRROS_SJC_18);
var lyr_BAIRROS_SJC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROS_SJC_18, 
                style: style_BAIRROS_SJC_18,
                popuplayertitle: "BAIRROS_SJC",
                interactive: true,
                title: '<img src="styles/legend/BAIRROS_SJC_18.png" /> BAIRROS_SJC'
            });
var format_DISTRITOS_SJC_19 = new ol.format.GeoJSON();
var features_DISTRITOS_SJC_19 = format_DISTRITOS_SJC_19.readFeatures(json_DISTRITOS_SJC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_DISTRITOS_SJC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_SJC_19.addFeatures(features_DISTRITOS_SJC_19);
var lyr_DISTRITOS_SJC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DISTRITOS_SJC_19, 
                style: style_DISTRITOS_SJC_19,
                popuplayertitle: "DISTRITOS_SJC",
                interactive: true,
                title: '<img src="styles/legend/DISTRITOS_SJC_19.png" /> DISTRITOS_SJC'
            });
var format_ClVilaIndustrial_20 = new ol.format.GeoJSON();
var features_ClVilaIndustrial_20 = format_ClVilaIndustrial_20.readFeatures(json_ClVilaIndustrial_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClVilaIndustrial_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClVilaIndustrial_20.addFeatures(features_ClVilaIndustrial_20);
var lyr_ClVilaIndustrial_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClVilaIndustrial_20, 
                style: style_ClVilaIndustrial_20,
                popuplayertitle: "Clã Vila Industrial",
                interactive: true,
                title: '<img src="styles/legend/ClVilaIndustrial_20.png" /> Clã Vila Industrial'
            });
var format_ClBosquedosIps2_21 = new ol.format.GeoJSON();
var features_ClBosquedosIps2_21 = format_ClBosquedosIps2_21.readFeatures(json_ClBosquedosIps2_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClBosquedosIps2_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClBosquedosIps2_21.addFeatures(features_ClBosquedosIps2_21);
var lyr_ClBosquedosIps2_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClBosquedosIps2_21, 
                style: style_ClBosquedosIps2_21,
                popuplayertitle: "Clã Bosque dos Ipês 2",
                interactive: true,
                title: '<img src="styles/legend/ClBosquedosIps2_21.png" /> Clã Bosque dos Ipês 2'
            });
var format_ClParqueResidencialUnio_22 = new ol.format.GeoJSON();
var features_ClParqueResidencialUnio_22 = format_ClParqueResidencialUnio_22.readFeatures(json_ClParqueResidencialUnio_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClParqueResidencialUnio_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClParqueResidencialUnio_22.addFeatures(features_ClParqueResidencialUnio_22);
var lyr_ClParqueResidencialUnio_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClParqueResidencialUnio_22, 
                style: style_ClParqueResidencialUnio_22,
                popuplayertitle: "Clã Parque Residencial União",
                interactive: true,
                title: '<img src="styles/legend/ClParqueResidencialUnio_22.png" /> Clã Parque Residencial União'
            });
var format_ClColonial_23 = new ol.format.GeoJSON();
var features_ClColonial_23 = format_ClColonial_23.readFeatures(json_ClColonial_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClColonial_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClColonial_23.addFeatures(features_ClColonial_23);
var lyr_ClColonial_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClColonial_23, 
                style: style_ClColonial_23,
                popuplayertitle: "Clã Colonial",
                interactive: true,
                title: '<img src="styles/legend/ClColonial_23.png" /> Clã Colonial'
            });
var format_ClBosquedosIps_24 = new ol.format.GeoJSON();
var features_ClBosquedosIps_24 = format_ClBosquedosIps_24.readFeatures(json_ClBosquedosIps_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClBosquedosIps_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClBosquedosIps_24.addFeatures(features_ClBosquedosIps_24);
var lyr_ClBosquedosIps_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClBosquedosIps_24, 
                style: style_ClBosquedosIps_24,
                popuplayertitle: "Clã Bosque dos Ipês",
                interactive: true,
                title: '<img src="styles/legend/ClBosquedosIps_24.png" /> Clã Bosque dos Ipês'
            });
var format_ClInflood_25 = new ol.format.GeoJSON();
var features_ClInflood_25 = format_ClInflood_25.readFeatures(json_ClInflood_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClInflood_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClInflood_25.addFeatures(features_ClInflood_25);
var lyr_ClInflood_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClInflood_25, 
                style: style_ClInflood_25,
                popuplayertitle: "Clã Inflood",
                interactive: true,
                title: '<img src="styles/legend/ClInflood_25.png" /> Clã Inflood'
            });
var format_ClParqueIndustrial_26 = new ol.format.GeoJSON();
var features_ClParqueIndustrial_26 = format_ClParqueIndustrial_26.readFeatures(json_ClParqueIndustrial_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClParqueIndustrial_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClParqueIndustrial_26.addFeatures(features_ClParqueIndustrial_26);
var lyr_ClParqueIndustrial_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClParqueIndustrial_26, 
                style: style_ClParqueIndustrial_26,
                popuplayertitle: "Clã Parque Industrial",
                interactive: true,
                title: '<img src="styles/legend/ClParqueIndustrial_26.png" /> Clã Parque Industrial'
            });
var format_ClJddasIndustrias_27 = new ol.format.GeoJSON();
var features_ClJddasIndustrias_27 = format_ClJddasIndustrias_27.readFeatures(json_ClJddasIndustrias_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_ClJddasIndustrias_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClJddasIndustrias_27.addFeatures(features_ClJddasIndustrias_27);
var lyr_ClJddasIndustrias_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClJddasIndustrias_27, 
                style: style_ClJddasIndustrias_27,
                popuplayertitle: "Clã Jd. das Industrias",
                interactive: true,
                title: '<img src="styles/legend/ClJddasIndustrias_27.png" /> Clã Jd. das Industrias'
            });
var format_MembrosBURN_28 = new ol.format.GeoJSON();
var features_MembrosBURN_28 = format_MembrosBURN_28.readFeatures(json_MembrosBURN_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32723'});
var jsonSource_MembrosBURN_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MembrosBURN_28.addFeatures(features_MembrosBURN_28);
var lyr_MembrosBURN_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MembrosBURN_28, 
                style: style_MembrosBURN_28,
                popuplayertitle: "Membros BURN",
                interactive: true,
                title: '<img src="styles/legend/MembrosBURN_28.png" /> Membros BURN'
            });
var group_MEMBROSBURN = new ol.layer.Group({
                                layers: [lyr_MembrosBURN_28,],
                                fold: "open",
                                title: "MEMBROS BURN"});
var group_CLS_SJC = new ol.layer.Group({
                                layers: [lyr_ClVilaIndustrial_20,lyr_ClBosquedosIps2_21,lyr_ClParqueResidencialUnio_22,lyr_ClColonial_23,lyr_ClBosquedosIps_24,lyr_ClInflood_25,lyr_ClParqueIndustrial_26,lyr_ClJddasIndustrias_27,],
                                fold: "open",
                                title: "CLÃS_SJC"});
var group_ESPACIALIDADESSJC = new ol.layer.Group({
                                layers: [lyr_FazendasStios_15,lyr_SJC_16,lyr_BAIRROS_IRREGULARES_17,lyr_BAIRROS_SJC_18,lyr_DISTRITOS_SJC_19,],
                                fold: "open",
                                title: "ESPACIALIDADES SJC"});
var group_ZONASSJC = new ol.layer.Group({
                                layers: [lyr_ZONACENTRO_9,lyr_ZONASUDESTE_10,lyr_ZONAOESTE_11,lyr_ZONASUL_12,lyr_ZONALESTE_13,lyr_ZONANORTE_14,],
                                fold: "open",
                                title: "ZONAS SJC"});
var group_RAIO_13e5KM = new ol.layer.Group({
                                layers: [lyr_RAIO1KM_1,lyr_RAIO1KM_2,lyr_RAIO1KM_3,lyr_RAIO1KM_4,lyr_RAIO1KM_5,lyr_RAIO1KM_6,lyr_RAIO1KM_7,lyr_RAIO1KM_8,],
                                fold: "open",
                                title: "RAIO_1,3 e 5KM"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_RAIO1KM_1.setVisible(true);lyr_RAIO1KM_2.setVisible(true);lyr_RAIO1KM_3.setVisible(true);lyr_RAIO1KM_4.setVisible(true);lyr_RAIO1KM_5.setVisible(true);lyr_RAIO1KM_6.setVisible(true);lyr_RAIO1KM_7.setVisible(true);lyr_RAIO1KM_8.setVisible(true);lyr_ZONACENTRO_9.setVisible(true);lyr_ZONASUDESTE_10.setVisible(true);lyr_ZONAOESTE_11.setVisible(true);lyr_ZONASUL_12.setVisible(true);lyr_ZONALESTE_13.setVisible(true);lyr_ZONANORTE_14.setVisible(true);lyr_FazendasStios_15.setVisible(true);lyr_SJC_16.setVisible(true);lyr_BAIRROS_IRREGULARES_17.setVisible(true);lyr_BAIRROS_SJC_18.setVisible(true);lyr_DISTRITOS_SJC_19.setVisible(true);lyr_ClVilaIndustrial_20.setVisible(true);lyr_ClBosquedosIps2_21.setVisible(true);lyr_ClParqueResidencialUnio_22.setVisible(true);lyr_ClColonial_23.setVisible(true);lyr_ClBosquedosIps_24.setVisible(true);lyr_ClInflood_25.setVisible(true);lyr_ClParqueIndustrial_26.setVisible(true);lyr_ClJddasIndustrias_27.setVisible(true);lyr_MembrosBURN_28.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_RAIO_13e5KM,group_ZONASSJC,group_ESPACIALIDADESSJC,group_CLS_SJC,group_MEMBROSBURN];
lyr_RAIO1KM_1.set('fieldAliases', {'id': 'id', });
lyr_RAIO1KM_2.set('fieldAliases', {'id': 'id', });
lyr_RAIO1KM_3.set('fieldAliases', {'id': 'id', });
lyr_RAIO1KM_4.set('fieldAliases', {'address': 'address', });
lyr_RAIO1KM_5.set('fieldAliases', {'id': 'id', });
lyr_RAIO1KM_6.set('fieldAliases', {'id': 'id', });
lyr_RAIO1KM_7.set('fieldAliases', {'id': 'id', });
lyr_RAIO1KM_8.set('fieldAliases', {'id': 'id', });
lyr_ZONACENTRO_9.set('fieldAliases', {'id': 'id', });
lyr_ZONASUDESTE_10.set('fieldAliases', {'id': 'id', });
lyr_ZONAOESTE_11.set('fieldAliases', {'id': 'id', });
lyr_ZONASUL_12.set('fieldAliases', {'id': 'id', });
lyr_ZONALESTE_13.set('fieldAliases', {'id': 'id', });
lyr_ZONANORTE_14.set('fieldAliases', {'id': 'id', });
lyr_FazendasStios_15.set('fieldAliases', {'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'cod_imovel', 'mod_fiscal': 'mod_fiscal', 'num_area': 'num_area', 'ind_status': 'ind_status', 'ind_tipo': 'ind_tipo', 'des_condic': 'des_condic', 'municipio': 'municipio', 'cod_estado': 'cod_estado', });
lyr_SJC_16.set('fieldAliases', {'NM_MUN': 'NM_MUN', });
lyr_BAIRROS_IRREGULARES_17.set('fieldAliases', {'id': 'id', 'ordem': 'ordem', 'refname': 'refname', 'perimetro': 'perimetro', });
lyr_BAIRROS_SJC_18.set('fieldAliases', {'bairro': 'bairro', 'lotes': 'lotes', });
lyr_DISTRITOS_SJC_19.set('fieldAliases', {'id': 'id', 'distrito': 'distrito', });
lyr_ClVilaIndustrial_20.set('fieldAliases', {'id': 'id', });
lyr_ClBosquedosIps2_21.set('fieldAliases', {'id': 'id', });
lyr_ClParqueResidencialUnio_22.set('fieldAliases', {'address': 'address', });
lyr_ClColonial_23.set('fieldAliases', {'id': 'id', });
lyr_ClBosquedosIps_24.set('fieldAliases', {'id': 'id', });
lyr_ClInflood_25.set('fieldAliases', {'id': 'id', });
lyr_ClParqueIndustrial_26.set('fieldAliases', {'id': 'id', });
lyr_ClJddasIndustrias_27.set('fieldAliases', {'id': 'id', 'LIDERES': 'LIDERES', 'TELEFONE': 'TELEFONE', 'ENDEREÇO': 'ENDEREÇO', 'DIA/HORA': 'DIA/HORA', 'FOTO': 'FOTO', });
lyr_MembrosBURN_28.set('fieldAliases', {'id': 'id', 'FOTO': 'FOTO', 'NOME': 'NOME', 'ENDEREÇO': 'ENDEREÇO', 'FUNÇÃO': 'FUNÇÃO', 'OBSERVAÇ�': 'OBSERVAÇ�', 'TELEFONE': 'TELEFONE', 'CLÃ': 'CLÃ', });
lyr_RAIO1KM_1.set('fieldImages', {'id': 'TextEdit', });
lyr_RAIO1KM_2.set('fieldImages', {'id': 'TextEdit', });
lyr_RAIO1KM_3.set('fieldImages', {'id': '', });
lyr_RAIO1KM_4.set('fieldImages', {'address': '', });
lyr_RAIO1KM_5.set('fieldImages', {'id': '', });
lyr_RAIO1KM_6.set('fieldImages', {'id': 'TextEdit', });
lyr_RAIO1KM_7.set('fieldImages', {'id': 'TextEdit', });
lyr_RAIO1KM_8.set('fieldImages', {'id': '', });
lyr_ZONACENTRO_9.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONASUDESTE_10.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONAOESTE_11.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONASUL_12.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONALESTE_13.set('fieldImages', {'id': 'TextEdit', });
lyr_ZONANORTE_14.set('fieldImages', {'id': 'TextEdit', });
lyr_FazendasStios_15.set('fieldImages', {'cod_tema': 'TextEdit', 'nom_tema': 'TextEdit', 'cod_imovel': 'TextEdit', 'mod_fiscal': 'TextEdit', 'num_area': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo': 'TextEdit', 'des_condic': 'TextEdit', 'municipio': 'TextEdit', 'cod_estado': 'TextEdit', });
lyr_SJC_16.set('fieldImages', {'NM_MUN': 'TextEdit', });
lyr_BAIRROS_IRREGULARES_17.set('fieldImages', {'id': 'Range', 'ordem': 'TextEdit', 'refname': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_BAIRROS_SJC_18.set('fieldImages', {'bairro': 'TextEdit', 'lotes': 'TextEdit', });
lyr_DISTRITOS_SJC_19.set('fieldImages', {'id': 'Range', 'distrito': 'TextEdit', });
lyr_ClVilaIndustrial_20.set('fieldImages', {'id': '', });
lyr_ClBosquedosIps2_21.set('fieldImages', {'id': '', });
lyr_ClParqueResidencialUnio_22.set('fieldImages', {'address': '', });
lyr_ClColonial_23.set('fieldImages', {'id': 'TextEdit', });
lyr_ClBosquedosIps_24.set('fieldImages', {'id': 'TextEdit', });
lyr_ClInflood_25.set('fieldImages', {'id': 'TextEdit', });
lyr_ClParqueIndustrial_26.set('fieldImages', {'id': 'TextEdit', });
lyr_ClJddasIndustrias_27.set('fieldImages', {'id': 'TextEdit', 'LIDERES': '', 'TELEFONE': '', 'ENDEREÇO': '', 'DIA/HORA': '', 'FOTO': '', });
lyr_MembrosBURN_28.set('fieldImages', {'id': 'TextEdit', 'FOTO': 'ExternalResource', 'NOME': '', 'ENDEREÇO': '', 'FUNÇÃO': '', 'OBSERVAÇ�': 'TextEdit', 'TELEFONE': '', 'CLÃ': '', });
lyr_RAIO1KM_1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_RAIO1KM_2.set('fieldLabels', {'id': 'no label', });
lyr_RAIO1KM_3.set('fieldLabels', {'id': 'no label', });
lyr_RAIO1KM_4.set('fieldLabels', {'address': 'no label', });
lyr_RAIO1KM_5.set('fieldLabels', {'id': 'no label', });
lyr_RAIO1KM_6.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_RAIO1KM_7.set('fieldLabels', {'id': 'no label', });
lyr_RAIO1KM_8.set('fieldLabels', {'id': 'no label', });
lyr_ZONACENTRO_9.set('fieldLabels', {'id': 'no label', });
lyr_ZONASUDESTE_10.set('fieldLabels', {'id': 'no label', });
lyr_ZONAOESTE_11.set('fieldLabels', {'id': 'no label', });
lyr_ZONASUL_12.set('fieldLabels', {'id': 'no label', });
lyr_ZONALESTE_13.set('fieldLabels', {'id': 'no label', });
lyr_ZONANORTE_14.set('fieldLabels', {'id': 'no label', });
lyr_FazendasStios_15.set('fieldLabels', {'cod_tema': 'no label', 'nom_tema': 'no label', 'cod_imovel': 'no label', 'mod_fiscal': 'no label', 'num_area': 'no label', 'ind_status': 'no label', 'ind_tipo': 'no label', 'des_condic': 'no label', 'municipio': 'no label', 'cod_estado': 'no label', });
lyr_SJC_16.set('fieldLabels', {'NM_MUN': 'no label', });
lyr_BAIRROS_IRREGULARES_17.set('fieldLabels', {'id': 'no label', 'ordem': 'no label', 'refname': 'no label', 'perimetro': 'no label', });
lyr_BAIRROS_SJC_18.set('fieldLabels', {'bairro': 'inline label - always visible', 'lotes': 'inline label - always visible', });
lyr_DISTRITOS_SJC_19.set('fieldLabels', {'id': 'no label', 'distrito': 'no label', });
lyr_ClVilaIndustrial_20.set('fieldLabels', {'id': 'no label', });
lyr_ClBosquedosIps2_21.set('fieldLabels', {'id': 'no label', });
lyr_ClParqueResidencialUnio_22.set('fieldLabels', {'address': 'no label', });
lyr_ClColonial_23.set('fieldLabels', {'id': 'no label', });
lyr_ClBosquedosIps_24.set('fieldLabels', {'id': 'no label', });
lyr_ClInflood_25.set('fieldLabels', {'id': 'no label', });
lyr_ClParqueIndustrial_26.set('fieldLabels', {'id': 'no label', });
lyr_ClJddasIndustrias_27.set('fieldLabels', {'id': 'no label', 'LIDERES': 'no label', 'TELEFONE': 'no label', 'ENDEREÇO': 'no label', 'DIA/HORA': 'no label', 'FOTO': 'no label', });
lyr_MembrosBURN_28.set('fieldLabels', {'id': 'no label', 'FOTO': 'no label', 'NOME': 'no label', 'ENDEREÇO': 'no label', 'FUNÇÃO': 'no label', 'OBSERVAÇ�': 'no label', 'TELEFONE': 'no label', 'CLÃ': 'no label', });
lyr_MembrosBURN_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});