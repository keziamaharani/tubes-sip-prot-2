var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_HASILFINAL_1 = new ol.format.GeoJSON();
var features_HASILFINAL_1 = format_HASILFINAL_1.readFeatures(json_HASILFINAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HASILFINAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HASILFINAL_1.addFeatures(features_HASILFINAL_1);
var lyr_HASILFINAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HASILFINAL_1, 
                style: style_HASILFINAL_1,
                interactive: true,
    title: 'HASIL FINAL<br />\
    <img src="styles/legend/HASILFINAL_1_0.png" /> Rendah<br />\
    <img src="styles/legend/HASILFINAL_1_1.png" /> Sedang<br />\
    <img src="styles/legend/HASILFINAL_1_2.png" /> Tinggi<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_HASILFINAL_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_HASILFINAL_1];
lyr_HASILFINAL_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Klasifikasi': 'Klasifikasi', });
lyr_HASILFINAL_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Klasifikasi': 'TextEdit', });
lyr_HASILFINAL_1.set('fieldLabels', {'fid': 'no label', 'DN': 'header label', 'Klasifikasi': 'header label', });
lyr_HASILFINAL_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});