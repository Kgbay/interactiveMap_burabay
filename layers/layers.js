ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3395").setExtent([7457316.677695, 6897422.476669, 7730515.404170, 7039543.431039]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI_clip_2025_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI_clip_2025<br />\
    <img src="styles/legend/NDVI_clip_2025_2_0.png" /> -0.16644<br />\
    <img src="styles/legend/NDVI_clip_2025_2_1.png" /> -0.06378<br />\
    <img src="styles/legend/NDVI_clip_2025_2_2.png" /> 0.03887<br />\
    <img src="styles/legend/NDVI_clip_2025_2_3.png" /> 0.14153<br />\
    <img src="styles/legend/NDVI_clip_2025_2_4.png" /> 0.24419<br />\
    <img src="styles/legend/NDVI_clip_2025_2_5.png" /> 0.34685<br />\
    <img src="styles/legend/NDVI_clip_2025_2_6.png" /> 0.44951<br />\
    <img src="styles/legend/NDVI_clip_2025_2_7.png" /> 0.54427<br />\
    <img src="styles/legend/NDVI_clip_2025_2_8.png" /> 0.62323<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_clip_2025_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7571542.592875, 6966741.339248, 7630218.129243, 7043783.298906]
        })
    });
var lyr_NDVI_clip_2024_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI_clip_2024<br />\
    <img src="styles/legend/NDVI_clip_2024_3_0.png" /> -0.19005<br />\
    <img src="styles/legend/NDVI_clip_2024_3_1.png" /> -0.09653<br />\
    <img src="styles/legend/NDVI_clip_2024_3_2.png" /> -0.00302<br />\
    <img src="styles/legend/NDVI_clip_2024_3_3.png" /> 0.09050<br />\
    <img src="styles/legend/NDVI_clip_2024_3_4.png" /> 0.18402<br />\
    <img src="styles/legend/NDVI_clip_2024_3_5.png" /> 0.27753<br />\
    <img src="styles/legend/NDVI_clip_2024_3_6.png" /> 0.37105<br />\
    <img src="styles/legend/NDVI_clip_2024_3_7.png" /> 0.45737<br />\
    <img src="styles/legend/NDVI_clip_2024_3_8.png" /> 0.52931<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_clip_2024_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7571542.592875, 6966741.339248, 7630218.129243, 7043783.298906]
        })
    });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Туристкая аттрактивность',
                interactive: true,
    title: 'Туристкая аттрактивность<br />\
    <img src="styles/legend/_4_0.png" /> 1.00000000000<br />\
    <img src="styles/legend/_4_1.png" /> 2.00000000000<br />\
    <img src="styles/legend/_4_2.png" /> 3.00000000000<br />\
    <img src="styles/legend/_4_3.png" /> 4.00000000000<br />' });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'структура',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> структура'
            });
var format_Boundary_6 = new ol.format.GeoJSON();
var features_Boundary_6 = format_Boundary_6.readFeatures(json_Boundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_Boundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_6.addFeatures(features_Boundary_6);
var lyr_Boundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_6, 
                style: style_Boundary_6,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_6.png" /> Boundary'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Загрязнение',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Загрязнение'
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
cluster__8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__8
});
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:cluster__8, 
                style: style__8,
                popuplayertitle: 'Объекты',
                interactive: true,
    title: 'Объекты<br />\
    <img src="styles/legend/_8_0.png" /> Побережье озера Имантау<br />\
    <img src="styles/legend/_8_1.png" /> Сакральные объекты<br />\
    <img src="styles/legend/_8_2.png" /> Сопка “Два Брата“<br />' });

lyr_GoogleSatelite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_NDVI_clip_2025_2.setVisible(true);lyr_NDVI_clip_2024_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr_Boundary_6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_OSMStandard_1,lyr_NDVI_clip_2025_2,lyr_NDVI_clip_2024_3,lyr__4,lyr__5,lyr_Boundary_6,lyr__7,lyr__8];
lyr__4.set('fieldAliases', {'Id': 'Id', 'class': 'class', });
lyr__5.set('fieldAliases', {'Id': 'Id', 'name': 'name', });
lyr_Boundary_6.set('fieldAliases', {'Id': 'Id', 'area': 'area', });
lyr__7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'VALL1': 'VALL1', 'VALL2': 'VALL2', 'VAlL3': 'VAlL3', });
lyr__8.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'IRN_mean': 'IRN_mean', 'Ku': 'Ku', 'Iul': 'Iul', 'Class_IUl': 'Class_IUl', });
lyr__4.set('fieldImages', {'Id': 'Range', 'class': 'TextEdit', });
lyr__5.set('fieldImages', {'Id': '', 'name': '', });
lyr_Boundary_6.set('fieldImages', {'Id': 'Range', 'area': 'TextEdit', });
lyr__7.set('fieldImages', {'Id': '', 'Name': '', 'VALL1': '', 'VALL2': '', 'VAlL3': '', });
lyr__8.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'IRN_mean': 'TextEdit', 'Ku': 'TextEdit', 'Iul': 'TextEdit', 'Class_IUl': 'TextEdit', });
lyr__4.set('fieldLabels', {'Id': 'no label', 'class': 'no label', });
lyr__5.set('fieldLabels', {'Id': 'no label', 'name': 'no label', });
lyr_Boundary_6.set('fieldLabels', {'Id': 'no label', 'area': 'no label', });
lyr__7.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'VALL1': 'no label', 'VALL2': 'no label', 'VAlL3': 'no label', });
lyr__8.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - visible with data', 'IRN_mean': 'no label', 'Ku': 'no label', 'Iul': 'no label', 'Class_IUl': 'no label', });
lyr__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});