var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SJC_1 = new ol.format.GeoJSON();
var features_SJC_1 = format_SJC_1.readFeatures(json_SJC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SJC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SJC_1.addFeatures(features_SJC_1);
var lyr_SJC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SJC_1, 
                style: style_SJC_1,
                popuplayertitle: "SJC",
                interactive: true,
                title: '<img src="styles/legend/SJC_1.png" /> SJC'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SJC_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SJC_1];
lyr_SJC_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'AREA_KM2': 'AREA_KM2', });
lyr_SJC_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_SJC_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA': 'no label', 'AREA_KM2': 'no label', });
lyr_SJC_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});