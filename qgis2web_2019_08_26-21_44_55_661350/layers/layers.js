var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_ARAT_1 = new ol.format.GeoJSON();
var features_ARAT_1 = format_ARAT_1.readFeatures(json_ARAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARAT_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ARAT_1.addFeatures(features_ARAT_1);var lyr_ARAT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARAT_1, 
                style: style_ARAT_1,
                title: '<img src="styles/legend/ARAT_1.png" /> ARAT'
            });var format_CONJ_2 = new ol.format.GeoJSON();
var features_CONJ_2 = format_CONJ_2.readFeatures(json_CONJ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONJ_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CONJ_2.addFeatures(features_CONJ_2);var lyr_CONJ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONJ_2, 
                style: style_CONJ_2,
                title: '<img src="styles/legend/CONJ_2.png" /> CONJ'
            });var format_SUB_3 = new ol.format.GeoJSON();
var features_SUB_3 = format_SUB_3.readFeatures(json_SUB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUB_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SUB_3.addFeatures(features_SUB_3);var lyr_SUB_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUB_3, 
                style: style_SUB_3,
                title: '<img src="styles/legend/SUB_3.png" /> SUB'
            });var format_SSDAT_4 = new ol.format.GeoJSON();
var features_SSDAT_4 = format_SSDAT_4.readFeatures(json_SSDAT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSDAT_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SSDAT_4.addFeatures(features_SSDAT_4);var lyr_SSDAT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SSDAT_4, 
                style: style_SSDAT_4,
                title: '<img src="styles/legend/SSDAT_4.png" /> SSDAT'
            });var format_SSDMT_5 = new ol.format.GeoJSON();
var features_SSDMT_5 = format_SSDMT_5.readFeatures(json_SSDMT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSDMT_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SSDMT_5.addFeatures(features_SSDMT_5);var lyr_SSDMT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SSDMT_5, 
                style: style_SSDMT_5,
                title: '<img src="styles/legend/SSDMT_5.png" /> SSDMT'
            });var format_SSDBT_6 = new ol.format.GeoJSON();
var features_SSDBT_6 = format_SSDBT_6.readFeatures(json_SSDBT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSDBT_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SSDBT_6.addFeatures(features_SSDBT_6);var lyr_SSDBT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SSDBT_6, 
                style: style_SSDBT_6,
                title: '<img src="styles/legend/SSDBT_6.png" /> SSDBT'
            });var format_PONNOT_7 = new ol.format.GeoJSON();
var features_PONNOT_7 = format_PONNOT_7.readFeatures(json_PONNOT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PONNOT_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PONNOT_7.addFeatures(features_PONNOT_7);var lyr_PONNOT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PONNOT_7, 
                style: style_PONNOT_7,
                title: '<img src="styles/legend/PONNOT_7.png" /> PONNOT'
            });var format_UCAT_8 = new ol.format.GeoJSON();
var features_UCAT_8 = format_UCAT_8.readFeatures(json_UCAT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCAT_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UCAT_8.addFeatures(features_UCAT_8);var lyr_UCAT_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UCAT_8, 
                style: style_UCAT_8,
                title: '<img src="styles/legend/UCAT_8.png" /> UCAT'
            });var format_UCMT_9 = new ol.format.GeoJSON();
var features_UCMT_9 = format_UCMT_9.readFeatures(json_UCMT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCMT_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UCMT_9.addFeatures(features_UCMT_9);var lyr_UCMT_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UCMT_9, 
                style: style_UCMT_9,
                title: '<img src="styles/legend/UCMT_9.png" /> UCMT'
            });var format_UCBT_10 = new ol.format.GeoJSON();
var features_UCBT_10 = format_UCBT_10.readFeatures(json_UCBT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCBT_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UCBT_10.addFeatures(features_UCBT_10);var lyr_UCBT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UCBT_10, 
                style: style_UCBT_10,
                title: '<img src="styles/legend/UCBT_10.png" /> UCBT'
            });var format_UGAT_11 = new ol.format.GeoJSON();
var features_UGAT_11 = format_UGAT_11.readFeatures(json_UGAT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGAT_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UGAT_11.addFeatures(features_UGAT_11);var lyr_UGAT_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UGAT_11, 
                style: style_UGAT_11,
                title: '<img src="styles/legend/UGAT_11.png" /> UGAT'
            });var format_UGMT_12 = new ol.format.GeoJSON();
var features_UGMT_12 = format_UGMT_12.readFeatures(json_UGMT_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGMT_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UGMT_12.addFeatures(features_UGMT_12);var lyr_UGMT_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UGMT_12, 
                style: style_UGMT_12,
                title: '<img src="styles/legend/UGMT_12.png" /> UGMT'
            });var format_UGBT_13 = new ol.format.GeoJSON();
var features_UGBT_13 = format_UGBT_13.readFeatures(json_UGBT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UGBT_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UGBT_13.addFeatures(features_UGBT_13);var lyr_UGBT_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UGBT_13, 
                style: style_UGBT_13,
                title: '<img src="styles/legend/UGBT_13.png" /> UGBT'
            });var format_UNCRAT_14 = new ol.format.GeoJSON();
var features_UNCRAT_14 = format_UNCRAT_14.readFeatures(json_UNCRAT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNCRAT_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNCRAT_14.addFeatures(features_UNCRAT_14);var lyr_UNCRAT_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNCRAT_14, 
                style: style_UNCRAT_14,
                title: '<img src="styles/legend/UNCRAT_14.png" /> UNCRAT'
            });var format_UNCRMT_15 = new ol.format.GeoJSON();
var features_UNCRMT_15 = format_UNCRMT_15.readFeatures(json_UNCRMT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNCRMT_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNCRMT_15.addFeatures(features_UNCRMT_15);var lyr_UNCRMT_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNCRMT_15, 
                style: style_UNCRMT_15,
                title: '<img src="styles/legend/UNCRMT_15.png" /> UNCRMT'
            });var format_UNCRBT_16 = new ol.format.GeoJSON();
var features_UNCRBT_16 = format_UNCRBT_16.readFeatures(json_UNCRBT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNCRBT_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNCRBT_16.addFeatures(features_UNCRBT_16);var lyr_UNCRBT_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNCRBT_16, 
                style: style_UNCRBT_16,
                title: '<img src="styles/legend/UNCRBT_16.png" /> UNCRBT'
            });var format_UNREAT_17 = new ol.format.GeoJSON();
var features_UNREAT_17 = format_UNREAT_17.readFeatures(json_UNREAT_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNREAT_17 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNREAT_17.addFeatures(features_UNREAT_17);var lyr_UNREAT_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNREAT_17, 
                style: style_UNREAT_17,
                title: '<img src="styles/legend/UNREAT_17.png" /> UNREAT'
            });var format_UNREMT_18 = new ol.format.GeoJSON();
var features_UNREMT_18 = format_UNREMT_18.readFeatures(json_UNREMT_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNREMT_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNREMT_18.addFeatures(features_UNREMT_18);var lyr_UNREMT_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNREMT_18, 
                style: style_UNREMT_18,
                title: '<img src="styles/legend/UNREMT_18.png" /> UNREMT'
            });var format_UNSEBT_19 = new ol.format.GeoJSON();
var features_UNSEBT_19 = format_UNSEBT_19.readFeatures(json_UNSEBT_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNSEBT_19 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNSEBT_19.addFeatures(features_UNSEBT_19);var lyr_UNSEBT_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNSEBT_19, 
                style: style_UNSEBT_19,
                title: '<img src="styles/legend/UNSEBT_19.png" /> UNSEBT'
            });var format_UNSEMT_20 = new ol.format.GeoJSON();
var features_UNSEMT_20 = format_UNSEMT_20.readFeatures(json_UNSEMT_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNSEMT_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNSEMT_20.addFeatures(features_UNSEMT_20);var lyr_UNSEMT_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNSEMT_20, 
                style: style_UNSEMT_20,
                title: '<img src="styles/legend/UNSEMT_20.png" /> UNSEMT'
            });var format_UNSEAT_21 = new ol.format.GeoJSON();
var features_UNSEAT_21 = format_UNSEAT_21.readFeatures(json_UNSEAT_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNSEAT_21 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNSEAT_21.addFeatures(features_UNSEAT_21);var lyr_UNSEAT_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNSEAT_21, 
                style: style_UNSEAT_21,
                title: '<img src="styles/legend/UNSEAT_21.png" /> UNSEAT'
            });var format_UNTRD_22 = new ol.format.GeoJSON();
var features_UNTRD_22 = format_UNTRD_22.readFeatures(json_UNTRD_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNTRD_22 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNTRD_22.addFeatures(features_UNTRD_22);var lyr_UNTRD_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNTRD_22, 
                style: style_UNTRD_22,
                title: '<img src="styles/legend/UNTRD_22.png" /> UNTRD'
            });var format_UNTRS_23 = new ol.format.GeoJSON();
var features_UNTRS_23 = format_UNTRS_23.readFeatures(json_UNTRS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNTRS_23 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_UNTRS_23.addFeatures(features_UNTRS_23);var lyr_UNTRS_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNTRS_23, 
                style: style_UNTRS_23,
                title: '<img src="styles/legend/UNTRS_23.png" /> UNTRS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ARAT_1.setVisible(true);lyr_CONJ_2.setVisible(true);lyr_SUB_3.setVisible(true);lyr_SSDAT_4.setVisible(true);lyr_SSDMT_5.setVisible(true);lyr_SSDBT_6.setVisible(true);lyr_PONNOT_7.setVisible(true);lyr_UCAT_8.setVisible(true);lyr_UCMT_9.setVisible(true);lyr_UCBT_10.setVisible(true);lyr_UGAT_11.setVisible(true);lyr_UGMT_12.setVisible(true);lyr_UGBT_13.setVisible(true);lyr_UNCRAT_14.setVisible(true);lyr_UNCRMT_15.setVisible(true);lyr_UNCRBT_16.setVisible(true);lyr_UNREAT_17.setVisible(true);lyr_UNREMT_18.setVisible(true);lyr_UNSEBT_19.setVisible(true);lyr_UNSEMT_20.setVisible(true);lyr_UNSEAT_21.setVisible(true);lyr_UNTRD_22.setVisible(true);lyr_UNTRS_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ARAT_1,lyr_CONJ_2,lyr_SUB_3,lyr_SSDAT_4,lyr_SSDMT_5,lyr_SSDBT_6,lyr_PONNOT_7,lyr_UCAT_8,lyr_UCMT_9,lyr_UCBT_10,lyr_UGAT_11,lyr_UGMT_12,lyr_UGBT_13,lyr_UNCRAT_14,lyr_UNCRMT_15,lyr_UNCRBT_16,lyr_UNREAT_17,lyr_UNREMT_18,lyr_UNSEBT_19,lyr_UNSEMT_20,lyr_UNSEAT_21,lyr_UNTRD_22,lyr_UNTRS_23];
lyr_ARAT_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'FUNCIONARIOS_PROPRIOS': 'FUNCIONARIOS_PROPRIOS', 'FUNCIONARIOS_TERCEIRIZADOS': 'FUNCIONARIOS_TERCEIRIZADOS', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CONJ_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SUB_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SSDAT_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PONTO_NOTAVEL_CONECTADO_1': 'PONTO_NOTAVEL_CONECTADO_1', 'PONTO_NOTAVEL_CONECTADO_2': 'PONTO_NOTAVEL_CONECTADO_2', 'CONJUNTO': 'CONJUNTO', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FASES_CONEXAO': 'FASES_CONEXAO', 'TIPO_SEGMENTO_CONDUTOR': 'TIPO_SEGMENTO_CONDUTOR', 'COMPRIMENTO': 'COMPRIMENTO', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', });
lyr_SSDMT_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PONTO_NOTAVEL_CONECTADO_1': 'PONTO_NOTAVEL_CONECTADO_1', 'PONTO_NOTAVEL_CONECTADO_2': 'PONTO_NOTAVEL_CONECTADO_2', 'CIRCUITO_DE_MEDIA_TENSAO': 'CIRCUITO_DE_MEDIA_TENSAO', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO', 'SUBESTACAO': 'SUBESTACAO', 'CONJUNTO': 'CONJUNTO', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FASES_CONEXAO': 'FASES_CONEXAO', 'TIPO_SEGMENTO_CONDUTOR': 'TIPO_SEGMENTO_CONDUTOR', 'COMPRIMENTO': 'COMPRIMENTO', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', });
lyr_SSDBT_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PONTO_NOTAVEL_CONECTADO_1': 'PONTO_NOTAVEL_CONECTADO_1', 'PONTO_NOTAVEL_CONECTADO_2': 'PONTO_NOTAVEL_CONECTADO_2', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO', 'CIRCUITO_DE_MEDIA_TENSAO': 'CIRCUITO_DE_MEDIA_TENSAO', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO', 'SUBESTACAO': 'SUBESTACAO', 'CONJUNTO': 'CONJUNTO', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'FASES_DE_CONEXAO': 'FASES_DE_CONEXAO', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'TIPO_SEGMENTO_CONDUTOR': 'TIPO_SEGMENTO_CONDUTOR', 'COMPRIMENTO': 'COMPRIMENTO', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', });
lyr_PONNOT_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'TIPO_PONTO_NOTAVEL': 'TIPO_PONTO_NOTAVEL', 'ESTRUTURA': 'ESTRUTURA', 'MATERIAL': 'MATERIAL', 'ESFORCO': 'ESFORCO', 'ALTURA': 'ALTURA', 'TIPO_ESTRUTURA': 'TIPO_ESTRUTURA', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'CONJUNTO': 'CONJUNTO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_UCAT_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PONTO_NOTAVEL_CONECTADO': 'PONTO_NOTAVEL_CONECTADO', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC': 'PAC', 'CIRCUITO_DE_ALTA_TENSAO': 'CIRCUITO_DE_ALTA_TENSAO', 'SUBESTACAO': 'SUBESTACAO', 'CONJUNTO': 'CONJUNTO', 'MUNICIPIO': 'MUNICIPIO', 'LOGRADOURO': 'LOGRADOURO', 'BAIRRO': 'BAIRRO', 'CEP': 'CEP', 'CLASSE_SUBCLASSE': 'CLASSE_SUBCLASSE', 'CNAE': 'CNAE', 'TIPO_CURVA_DE_CARGA': 'TIPO_CURVA_DE_CARGA', 'FASES_CONEXAO': 'FASES_CONEXAO', 'GRUPO_DE_TENSAO': 'GRUPO_DE_TENSAO', 'TENSAO_DE_FORNECIMENTO': 'TENSAO_DE_FORNECIMENTO', 'GRUPO_TARIFARIO': 'GRUPO_TARIFARIO', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'DEM_P_01': 'DEM_P_01', 'DEM_P_02': 'DEM_P_02', 'DEM_P_03': 'DEM_P_03', 'DEM_P_04': 'DEM_P_04', 'DEM_P_05': 'DEM_P_05', 'DEM_P_06': 'DEM_P_06', 'DEM_P_07': 'DEM_P_07', 'DEM_P_08': 'DEM_P_08', 'DEM_P_09': 'DEM_P_09', 'DEM_P_10': 'DEM_P_10', 'DEM_P_11': 'DEM_P_11', 'DEM_P_12': 'DEM_P_12', 'DEM_F_01': 'DEM_F_01', 'DEM_F_02': 'DEM_F_02', 'DEM_F_03': 'DEM_F_03', 'DEM_F_04': 'DEM_F_04', 'DEM_F_05': 'DEM_F_05', 'DEM_F_06': 'DEM_F_06', 'DEM_F_07': 'DEM_F_07', 'DEM_F_08': 'DEM_F_08', 'DEM_F_09': 'DEM_F_09', 'DEM_F_10': 'DEM_F_10', 'DEM_F_11': 'DEM_F_11', 'DEM_F_12': 'DEM_F_12', 'ENE_P_01': 'ENE_P_01', 'ENE_P_02': 'ENE_P_02', 'ENE_P_03': 'ENE_P_03', 'ENE_P_04': 'ENE_P_04', 'ENE_P_05': 'ENE_P_05', 'ENE_P_06': 'ENE_P_06', 'ENE_P_07': 'ENE_P_07', 'ENE_P_08': 'ENE_P_08', 'ENE_P_09': 'ENE_P_09', 'ENE_P_10': 'ENE_P_10', 'ENE_P_11': 'ENE_P_11', 'ENE_P_12': 'ENE_P_12', 'ENE_F_01': 'ENE_F_01', 'ENE_F_02': 'ENE_F_02', 'ENE_F_03': 'ENE_F_03', 'ENE_F_04': 'ENE_F_04', 'ENE_F_05': 'ENE_F_05', 'ENE_F_06': 'ENE_F_06', 'ENE_F_07': 'ENE_F_07', 'ENE_F_08': 'ENE_F_08', 'ENE_F_09': 'ENE_F_09', 'ENE_F_10': 'ENE_F_10', 'ENE_F_11': 'ENE_F_11', 'ENE_F_12': 'ENE_F_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCRICAO': 'DESCRICAO', });
lyr_UCMT_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PONTO_NOTAVEL_CONECTADO': 'PONTO_NOTAVEL_CONECTADO', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC': 'PAC', 'CIRCUITO_DE_MEDIA_TENSAO': 'CIRCUITO_DE_MEDIA_TENSAO', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO', 'SUBESTACAO': 'SUBESTACAO', 'CONJUNTO': 'CONJUNTO', 'MUNICIPIO': 'MUNICIPIO', 'LOGRADOURO': 'LOGRADOURO', 'BAIRRO': 'BAIRRO', 'CEP': 'CEP', 'CLASSE_SUBCLASSE': 'CLASSE_SUBCLASSE', 'CNAE': 'CNAE', 'TIPO_CURVA_DE_CARGA': 'TIPO_CURVA_DE_CARGA', 'FASES_CONEXAO': 'FASES_CONEXAO', 'GRUPO_DE_TENSAO': 'GRUPO_DE_TENSAO', 'TENSAO_DE_FORNECIMENTO': 'TENSAO_DE_FORNECIMENTO', 'GRUPO_TARIFARIO': 'GRUPO_TARIFARIO', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'DEM_01': 'DEM_01', 'DEM_02': 'DEM_02', 'DEM_03': 'DEM_03', 'DEM_04': 'DEM_04', 'DEM_05': 'DEM_05', 'DEM_06': 'DEM_06', 'DEM_07': 'DEM_07', 'DEM_08': 'DEM_08', 'DEM_09': 'DEM_09', 'DEM_10': 'DEM_10', 'DEM_11': 'DEM_11', 'DEM_12': 'DEM_12', 'ENE_01': 'ENE_01', 'ENE_02': 'ENE_02', 'ENE_03': 'ENE_03', 'ENE_04': 'ENE_04', 'ENE_05': 'ENE_05', 'ENE_06': 'ENE_06', 'ENE_07': 'ENE_07', 'ENE_08': 'ENE_08', 'ENE_09': 'ENE_09', 'ENE_10': 'ENE_10', 'ENE_11': 'ENE_11', 'ENE_12': 'ENE_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCRICAO': 'DESCRICAO', });
lyr_UCBT_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC': 'PAC', 'PONTO_NOTAVEL_CONECTADO': 'PONTO_NOTAVEL_CONECTADO', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO', 'CIRCUITO_DE_MEDIA_TENSAO': 'CIRCUITO_DE_MEDIA_TENSAO', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO', 'SUBESTACAO': 'SUBESTACAO', 'CONJUNTO': 'CONJUNTO', 'MUNICIPIO': 'MUNICIPIO', 'LOGRADOURO': 'LOGRADOURO', 'BAIRRO': 'BAIRRO', 'CEP': 'CEP', 'CLASSE_SUBCLASSE': 'CLASSE_SUBCLASSE', 'CNAE': 'CNAE', 'TIPO_CURVA_DE_CARGA': 'TIPO_CURVA_DE_CARGA', 'FASES_CONEXAO': 'FASES_CONEXAO', 'GRUPO_DE_TENSAO': 'GRUPO_DE_TENSAO', 'TENSAO_DE_FORNECIMENTO': 'TENSAO_DE_FORNECIMENTO', 'GRUPO_TARIFARIO': 'GRUPO_TARIFARIO', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'CORRENTE_DISJUNTOR_GERAL': 'CORRENTE_DISJUNTOR_GERAL', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'ENE_01': 'ENE_01', 'ENE_02': 'ENE_02', 'ENE_03': 'ENE_03', 'ENE_04': 'ENE_04', 'ENE_05': 'ENE_05', 'ENE_06': 'ENE_06', 'ENE_07': 'ENE_07', 'ENE_08': 'ENE_08', 'ENE_09': 'ENE_09', 'ENE_10': 'ENE_10', 'ENE_11': 'ENE_11', 'ENE_12': 'ENE_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCRICAO': 'DESCRICAO', });
lyr_UGAT_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON': 'PN_CON', 'DIST': 'DIST', 'PAC': 'PAC', 'CTAT': 'CTAT', 'CEG': 'CEG', 'CONJ': 'CONJ', 'MUN': 'MUN', 'SUB': 'SUB', 'LGRD': 'LGRD', 'BRR': 'BRR', 'CEP': 'CEP', 'CNAE': 'CNAE', 'FAS_CON': 'FAS_CON', 'GRU_TEN': 'GRU_TEN', 'TEN_FORN': 'TEN_FORN', 'SIT_ATIV': 'SIT_ATIV', 'DAT_CON': 'DAT_CON', 'POT_INST': 'POT_INST', 'POT_CONT': 'POT_CONT', 'DEM_P_01': 'DEM_P_01', 'DEM_P_02': 'DEM_P_02', 'DEM_P_03': 'DEM_P_03', 'DEM_P_04': 'DEM_P_04', 'DEM_P_05': 'DEM_P_05', 'DEM_P_06': 'DEM_P_06', 'DEM_P_07': 'DEM_P_07', 'DEM_P_08': 'DEM_P_08', 'DEM_P_09': 'DEM_P_09', 'DEM_P_10': 'DEM_P_10', 'DEM_P_11': 'DEM_P_11', 'DEM_P_12': 'DEM_P_12', 'DEM_F_01': 'DEM_F_01', 'DEM_F_02': 'DEM_F_02', 'DEM_F_03': 'DEM_F_03', 'DEM_F_04': 'DEM_F_04', 'DEM_F_05': 'DEM_F_05', 'DEM_F_06': 'DEM_F_06', 'DEM_F_07': 'DEM_F_07', 'DEM_F_08': 'DEM_F_08', 'DEM_F_09': 'DEM_F_09', 'DEM_F_10': 'DEM_F_10', 'DEM_F_11': 'DEM_F_11', 'DEM_F_12': 'DEM_F_12', 'ENE_P_01': 'ENE_P_01', 'ENE_P_02': 'ENE_P_02', 'ENE_P_03': 'ENE_P_03', 'ENE_P_04': 'ENE_P_04', 'ENE_P_05': 'ENE_P_05', 'ENE_P_06': 'ENE_P_06', 'ENE_P_07': 'ENE_P_07', 'ENE_P_08': 'ENE_P_08', 'ENE_P_09': 'ENE_P_09', 'ENE_P_10': 'ENE_P_10', 'ENE_P_11': 'ENE_P_11', 'ENE_P_12': 'ENE_P_12', 'ENE_F_01': 'ENE_F_01', 'ENE_F_02': 'ENE_F_02', 'ENE_F_03': 'ENE_F_03', 'ENE_F_04': 'ENE_F_04', 'ENE_F_05': 'ENE_F_05', 'ENE_F_06': 'ENE_F_06', 'ENE_F_07': 'ENE_F_07', 'ENE_F_08': 'ENE_F_08', 'ENE_F_09': 'ENE_F_09', 'ENE_F_10': 'ENE_F_10', 'ENE_F_11': 'ENE_F_11', 'ENE_F_12': 'ENE_F_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCR': 'DESCR', });
lyr_UGMT_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON': 'PN_CON', 'DIST': 'DIST', 'PAC': 'PAC', 'CEG': 'CEG', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'LGRD': 'LGRD', 'BRR': 'BRR', 'CEP': 'CEP', 'CNAE': 'CNAE', 'FAS_CON': 'FAS_CON', 'GRU_TEN': 'GRU_TEN', 'TEN_FORN': 'TEN_FORN', 'SIT_ATIV': 'SIT_ATIV', 'DAT_CON': 'DAT_CON', 'POT_INST': 'POT_INST', 'POT_CONT': 'POT_CONT', 'DEM_01': 'DEM_01', 'DEM_02': 'DEM_02', 'DEM_03': 'DEM_03', 'DEM_04': 'DEM_04', 'DEM_05': 'DEM_05', 'DEM_06': 'DEM_06', 'DEM_07': 'DEM_07', 'DEM_08': 'DEM_08', 'DEM_09': 'DEM_09', 'DEM_10': 'DEM_10', 'DEM_11': 'DEM_11', 'DEM_12': 'DEM_12', 'ENE_01': 'ENE_01', 'ENE_02': 'ENE_02', 'ENE_03': 'ENE_03', 'ENE_04': 'ENE_04', 'ENE_05': 'ENE_05', 'ENE_06': 'ENE_06', 'ENE_07': 'ENE_07', 'ENE_08': 'ENE_08', 'ENE_09': 'ENE_09', 'ENE_10': 'ENE_10', 'ENE_11': 'ENE_11', 'ENE_12': 'ENE_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCR': 'DESCR', });
lyr_UGBT_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON': 'PN_CON', 'DIST': 'DIST', 'PAC': 'PAC', 'CEG': 'CEG', 'UNI_TR_D': 'UNI_TR_D', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'LGRD': 'LGRD', 'BRR': 'BRR', 'CEP': 'CEP', 'CNAE': 'CNAE', 'FAS_CON': 'FAS_CON', 'GRU_TEN': 'GRU_TEN', 'TEN_FORN': 'TEN_FORN', 'SIT_ATIV': 'SIT_ATIV', 'DAT_CON': 'DAT_CON', 'POT_INST': 'POT_INST', 'POT_CONT': 'POT_CONT', 'ENE_01': 'ENE_01', 'ENE_02': 'ENE_02', 'ENE_03': 'ENE_03', 'ENE_04': 'ENE_04', 'ENE_05': 'ENE_05', 'ENE_06': 'ENE_06', 'ENE_07': 'ENE_07', 'ENE_08': 'ENE_08', 'ENE_09': 'ENE_09', 'ENE_10': 'ENE_10', 'ENE_11': 'ENE_11', 'ENE_12': 'ENE_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCR': 'DESCR', });
lyr_UNCRAT_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'POT_NOM': 'POT_NOM', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ARE_LOC': 'ARE_LOC', 'DAT_CON': 'DAT_CON', 'BANC': 'BANC', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_UNCRMT_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'POT_NOM': 'POT_NOM', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ARE_LOC': 'ARE_LOC', 'DAT_CON': 'DAT_CON', 'BANC': 'BANC', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_UNCRBT_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'POT_NOM': 'POT_NOM', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'UNI_TR_D': 'UNI_TR_D', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ARE_LOC': 'ARE_LOC', 'DAT_CON': 'DAT_CON', 'BANC': 'BANC', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_UNREAT_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'DAT_CON': 'DAT_CON', 'BANC': 'BANC', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_UNREMT_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'DAT_CON': 'DAT_CON', 'BANC': 'BANC', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_UNSEBT_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'P_N_OPE': 'P_N_OPE', 'CAP_ELO': 'CAP_ELO', 'COR_NOM': 'COR_NOM', 'TLCD': 'TLCD', 'DAT_CON': 'DAT_CON', 'POS': 'POS', 'UNI_TR_D': 'UNI_TR_D', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ARE_LOC': 'ARE_LOC', 'DESCR': 'DESCR', });
lyr_UNSEMT_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'P_N_OPE': 'P_N_OPE', 'CAP_ELO': 'CAP_ELO', 'COR_NOM': 'COR_NOM', 'TLCD': 'TLCD', 'DAT_CON': 'DAT_CON', 'POS': 'POS', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ARE_LOC': 'ARE_LOC', 'DESCR': 'DESCR', });
lyr_UNSEAT_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'P_N_OPE': 'P_N_OPE', 'CAP_ELO': 'CAP_ELO', 'COR_NOM': 'COR_NOM', 'TLCD': 'TLCD', 'DAT_CON': 'DAT_CON', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_UNTRD_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'PAC_3': 'PAC_3', 'FASES_CONEXAO_PRIMARIA': 'FASES_CONEXAO_PRIMARIA', 'FASES_CONEXAO_SECUNDARIA': 'FASES_CONEXAO_SECUNDARIA', 'FASES_CONEXAO_TERCIARIA': 'FASES_CONEXAO_TERCIARIA', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'TIPO_DE_UNIDADE': 'TIPO_DE_UNIDADE', 'ATRIBUICAO_PERDAS': 'ATRIBUICAO_PERDAS', 'TENSAO_LINHA_SECUNDARIO': 'TENSAO_LINHA_SECUNDARIO', 'CAPACIDADE_ELO_FUSIVEL': 'CAPACIDADE_ELO_FUSIVEL', 'CAPACIDADE_CHAVE_FUSIVEL': 'CAPACIDADE_CHAVE_FUSIVEL', 'TAP': 'TAP', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'CONFIGURACAO_DO_CIRCUITO': 'CONFIGURACAO_DO_CIRCUITO', 'POSTO': 'POSTO', 'POTENCIA_NOMINAL': 'POTENCIA_NOMINAL', 'PERDA_FERRO': 'PERDA_FERRO', 'PERDA_TOTAL': 'PERDA_TOTAL', 'DATA_CONEXAO': 'DATA_CONEXAO', 'CIRCUITO_DE_MEDIA_TENSAO': 'CIRCUITO_DE_MEDIA_TENSAO', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO', 'SUBESTACAO': 'SUBESTACAO', 'CONJUNTO': 'CONJUNTO', 'MUNICIPIO': 'MUNICIPIO', 'BANCO_EQUIPAMENTOS': 'BANCO_EQUIPAMENTOS', 'TIPO_DE_TRAFO': 'TIPO_DE_TRAFO', 'MRT': 'MRT', 'DESCRICAO': 'DESCRICAO', 'IMPEDANCIA': 'IMPEDANCIA', });
lyr_UNTRS_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'SUBESTACAO': 'SUBESTACAO', 'BARRAMENTO_1': 'BARRAMENTO_1', 'BARRAMENTO_2': 'BARRAMENTO_2', 'BARRAMENTO_3': 'BARRAMENTO_3', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'PAC_3': 'PAC_3', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'FASES_CONEXAO_PRIMARIA': 'FASES_CONEXAO_PRIMARIA', 'FASES_CONEXAO_SECUNDARIA': 'FASES_CONEXAO_SECUNDARIA', 'FASES_CONEXAO_TERCIARIA': 'FASES_CONEXAO_TERCIARIA', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'TIPO_DE_UNIDADE': 'TIPO_DE_UNIDADE', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'POTENCIA_NOMINAL': 'POTENCIA_NOMINAL', 'POTENCIA_VENTILACAO_FORCADA_01': 'POTENCIA_VENTILACAO_FORCADA_01', 'POTENCIA_VENTILACAO_FORCADA_02': 'POTENCIA_VENTILACAO_FORCADA_02', 'PERDA_FERRO': 'PERDA_FERRO', 'PERDA_TOTAL': 'PERDA_TOTAL', 'BANCO_EQUIPAMENTOS': 'BANCO_EQUIPAMENTOS', 'DATA_CONEXAO': 'DATA_CONEXAO', 'CONJUNTO': 'CONJUNTO', 'MUNICIPIO': 'MUNICIPIO', 'TIPO_TRAFO': 'TIPO_TRAFO', 'ALOCACAO_PERDAS': 'ALOCACAO_PERDAS', 'ENES_01': 'ENES_01', 'ENES_02': 'ENES_02', 'ENES_03': 'ENES_03', 'ENES_04': 'ENES_04', 'ENES_05': 'ENES_05', 'ENES_06': 'ENES_06', 'ENES_07': 'ENES_07', 'ENES_08': 'ENES_08', 'ENES_09': 'ENES_09', 'ENES_10': 'ENES_10', 'ENES_11': 'ENES_11', 'ENES_12': 'ENES_12', 'ENET_01': 'ENET_01', 'ENET_02': 'ENET_02', 'ENET_03': 'ENET_03', 'ENET_04': 'ENET_04', 'ENET_05': 'ENET_05', 'ENET_06': 'ENET_06', 'ENET_07': 'ENET_07', 'ENET_08': 'ENET_08', 'ENET_09': 'ENET_09', 'ENET_10': 'ENET_10', 'ENET_11': 'ENET_11', 'ENET_12': 'ENET_12', 'DESCRICAO': 'DESCRICAO', });
lyr_ARAT_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'FUNCIONARIOS_PROPRIOS': 'TextEdit', 'FUNCIONARIOS_TERCEIRIZADOS': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CONJ_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'NOME': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SUB_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'NOME': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SSDAT_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_1': 'ValueRelation', 'PONTO_NOTAVEL_CONECTADO_2': 'ValueRelation', 'CONJUNTO': 'ValueRelation', 'AREA_LOCALIZACAO': 'ValueRelation', 'DISTRIBUIDORA': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FASES_CONEXAO': 'ValueRelation', 'TIPO_SEGMENTO_CONDUTOR': 'ValueRelation', 'COMPRIMENTO': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_SSDMT_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_1': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_2': 'TextEdit', 'CIRCUITO_DE_MEDIA_TENSAO': 'TextEdit', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'TextEdit', 'SUBESTACAO': 'TextEdit', 'CONJUNTO': 'Range', 'AREA_LOCALIZACAO': 'TextEdit', 'DISTRIBUIDORA': 'Range', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FASES_CONEXAO': 'TextEdit', 'TIPO_SEGMENTO_CONDUTOR': 'TextEdit', 'COMPRIMENTO': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_SSDBT_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_1': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_2': 'TextEdit', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'TextEdit', 'CIRCUITO_DE_MEDIA_TENSAO': 'TextEdit', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'TextEdit', 'SUBESTACAO': 'TextEdit', 'CONJUNTO': 'Range', 'AREA_LOCALIZACAO': 'TextEdit', 'FASES_DE_CONEXAO': 'TextEdit', 'DISTRIBUIDORA': 'Range', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'TIPO_SEGMENTO_CONDUTOR': 'TextEdit', 'COMPRIMENTO': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PONNOT_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'TIPO_PONTO_NOTAVEL': 'ValueRelation', 'ESTRUTURA': 'ValueRelation', 'MATERIAL': 'ValueRelation', 'ESFORCO': 'ValueRelation', 'ALTURA': 'ValueRelation', 'TIPO_ESTRUTURA': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'CONJUNTO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_UCAT_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'PAC': 'TextEdit', 'CIRCUITO_DE_ALTA_TENSAO': 'TextEdit', 'SUBESTACAO': 'TextEdit', 'CONJUNTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'BAIRRO': 'TextEdit', 'CEP': 'TextEdit', 'CLASSE_SUBCLASSE': 'TextEdit', 'CNAE': 'TextEdit', 'TIPO_CURVA_DE_CARGA': 'TextEdit', 'FASES_CONEXAO': 'TextEdit', 'GRUPO_DE_TENSAO': 'TextEdit', 'TENSAO_DE_FORNECIMENTO': 'TextEdit', 'GRUPO_TARIFARIO': 'TextEdit', 'SITUACAO_ATIVACAO': 'TextEdit', 'DATA_CONEXAO': 'TextEdit', 'CARGA_INSTALADA': 'TextEdit', 'AREA_LOCALIZACAO': 'TextEdit', 'DEM_P_01': 'TextEdit', 'DEM_P_02': 'TextEdit', 'DEM_P_03': 'TextEdit', 'DEM_P_04': 'TextEdit', 'DEM_P_05': 'TextEdit', 'DEM_P_06': 'TextEdit', 'DEM_P_07': 'TextEdit', 'DEM_P_08': 'TextEdit', 'DEM_P_09': 'TextEdit', 'DEM_P_10': 'TextEdit', 'DEM_P_11': 'TextEdit', 'DEM_P_12': 'TextEdit', 'DEM_F_01': 'TextEdit', 'DEM_F_02': 'TextEdit', 'DEM_F_03': 'TextEdit', 'DEM_F_04': 'TextEdit', 'DEM_F_05': 'TextEdit', 'DEM_F_06': 'TextEdit', 'DEM_F_07': 'TextEdit', 'DEM_F_08': 'TextEdit', 'DEM_F_09': 'TextEdit', 'DEM_F_10': 'TextEdit', 'DEM_F_11': 'TextEdit', 'DEM_F_12': 'TextEdit', 'ENE_P_01': 'TextEdit', 'ENE_P_02': 'TextEdit', 'ENE_P_03': 'TextEdit', 'ENE_P_04': 'TextEdit', 'ENE_P_05': 'TextEdit', 'ENE_P_06': 'TextEdit', 'ENE_P_07': 'TextEdit', 'ENE_P_08': 'TextEdit', 'ENE_P_09': 'TextEdit', 'ENE_P_10': 'TextEdit', 'ENE_P_11': 'TextEdit', 'ENE_P_12': 'TextEdit', 'ENE_F_01': 'TextEdit', 'ENE_F_02': 'TextEdit', 'ENE_F_03': 'TextEdit', 'ENE_F_04': 'TextEdit', 'ENE_F_05': 'TextEdit', 'ENE_F_06': 'TextEdit', 'ENE_F_07': 'TextEdit', 'ENE_F_08': 'TextEdit', 'ENE_F_09': 'TextEdit', 'ENE_F_10': 'TextEdit', 'ENE_F_11': 'TextEdit', 'ENE_F_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_UCMT_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO': 'ValueRelation', 'DISTRIBUIDORA': 'TextEdit', 'PAC': 'TextEdit', 'CIRCUITO_DE_MEDIA_TENSAO': 'ValueRelation', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'ValueRelation', 'SUBESTACAO': 'ValueRelation', 'CONJUNTO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'BAIRRO': 'TextEdit', 'CEP': 'TextEdit', 'CLASSE_SUBCLASSE': 'ValueRelation', 'CNAE': 'TextEdit', 'TIPO_CURVA_DE_CARGA': 'TextEdit', 'FASES_CONEXAO': 'ValueRelation', 'GRUPO_DE_TENSAO': 'ValueRelation', 'TENSAO_DE_FORNECIMENTO': 'ValueRelation', 'GRUPO_TARIFARIO': 'ValueRelation', 'SITUACAO_DE_ATIVACAO': 'ValueRelation', 'DATA_CONEXAO': 'TextEdit', 'CARGA_INSTALADA': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'DEM_01': 'TextEdit', 'DEM_02': 'TextEdit', 'DEM_03': 'TextEdit', 'DEM_04': 'TextEdit', 'DEM_05': 'TextEdit', 'DEM_06': 'TextEdit', 'DEM_07': 'TextEdit', 'DEM_08': 'TextEdit', 'DEM_09': 'TextEdit', 'DEM_10': 'TextEdit', 'DEM_11': 'TextEdit', 'DEM_12': 'TextEdit', 'ENE_01': 'TextEdit', 'ENE_02': 'TextEdit', 'ENE_03': 'TextEdit', 'ENE_04': 'TextEdit', 'ENE_05': 'TextEdit', 'ENE_06': 'TextEdit', 'ENE_07': 'TextEdit', 'ENE_08': 'TextEdit', 'ENE_09': 'TextEdit', 'ENE_10': 'TextEdit', 'ENE_11': 'TextEdit', 'ENE_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_UCBT_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'PAC': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO': 'ValueRelation', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'ValueRelation', 'CIRCUITO_DE_MEDIA_TENSAO': 'ValueRelation', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'ValueRelation', 'SUBESTACAO': 'ValueRelation', 'CONJUNTO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'LOGRADOURO': 'TextEdit', 'BAIRRO': 'TextEdit', 'CEP': 'TextEdit', 'CLASSE_SUBCLASSE': 'ValueRelation', 'CNAE': 'TextEdit', 'TIPO_CURVA_DE_CARGA': 'TextEdit', 'FASES_CONEXAO': 'ValueRelation', 'GRUPO_DE_TENSAO': 'ValueRelation', 'TENSAO_DE_FORNECIMENTO': 'ValueRelation', 'GRUPO_TARIFARIO': 'ValueRelation', 'SITUACAO_DE_ATIVACAO': 'ValueRelation', 'DATA_CONEXAO': 'TextEdit', 'CARGA_INSTALADA': 'TextEdit', 'CORRENTE_DISJUNTOR_GERAL': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'ENE_01': 'TextEdit', 'ENE_02': 'TextEdit', 'ENE_03': 'TextEdit', 'ENE_04': 'TextEdit', 'ENE_05': 'TextEdit', 'ENE_06': 'TextEdit', 'ENE_07': 'TextEdit', 'ENE_08': 'TextEdit', 'ENE_09': 'TextEdit', 'ENE_10': 'TextEdit', 'ENE_11': 'TextEdit', 'ENE_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_UGAT_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON': 'ValueRelation', 'DIST': 'TextEdit', 'PAC': 'TextEdit', 'CTAT': 'ValueRelation', 'CEG': 'TextEdit', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'SUB': 'ValueRelation', 'LGRD': 'TextEdit', 'BRR': 'TextEdit', 'CEP': 'TextEdit', 'CNAE': 'TextEdit', 'FAS_CON': 'ValueRelation', 'GRU_TEN': 'ValueRelation', 'TEN_FORN': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'DAT_CON': 'TextEdit', 'POT_INST': 'TextEdit', 'POT_CONT': 'TextEdit', 'DEM_P_01': 'TextEdit', 'DEM_P_02': 'TextEdit', 'DEM_P_03': 'TextEdit', 'DEM_P_04': 'TextEdit', 'DEM_P_05': 'TextEdit', 'DEM_P_06': 'TextEdit', 'DEM_P_07': 'TextEdit', 'DEM_P_08': 'TextEdit', 'DEM_P_09': 'TextEdit', 'DEM_P_10': 'TextEdit', 'DEM_P_11': 'TextEdit', 'DEM_P_12': 'TextEdit', 'DEM_F_01': 'TextEdit', 'DEM_F_02': 'TextEdit', 'DEM_F_03': 'TextEdit', 'DEM_F_04': 'TextEdit', 'DEM_F_05': 'TextEdit', 'DEM_F_06': 'TextEdit', 'DEM_F_07': 'TextEdit', 'DEM_F_08': 'TextEdit', 'DEM_F_09': 'TextEdit', 'DEM_F_10': 'TextEdit', 'DEM_F_11': 'TextEdit', 'DEM_F_12': 'TextEdit', 'ENE_P_01': 'TextEdit', 'ENE_P_02': 'TextEdit', 'ENE_P_03': 'TextEdit', 'ENE_P_04': 'TextEdit', 'ENE_P_05': 'TextEdit', 'ENE_P_06': 'TextEdit', 'ENE_P_07': 'TextEdit', 'ENE_P_08': 'TextEdit', 'ENE_P_09': 'TextEdit', 'ENE_P_10': 'TextEdit', 'ENE_P_11': 'TextEdit', 'ENE_P_12': 'TextEdit', 'ENE_F_01': 'TextEdit', 'ENE_F_02': 'TextEdit', 'ENE_F_03': 'TextEdit', 'ENE_F_04': 'TextEdit', 'ENE_F_05': 'TextEdit', 'ENE_F_06': 'TextEdit', 'ENE_F_07': 'TextEdit', 'ENE_F_08': 'TextEdit', 'ENE_F_09': 'TextEdit', 'ENE_F_10': 'TextEdit', 'ENE_F_11': 'TextEdit', 'ENE_F_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCR': 'TextEdit', });
lyr_UGMT_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON': 'ValueRelation', 'DIST': 'TextEdit', 'PAC': 'TextEdit', 'CEG': 'TextEdit', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'LGRD': 'TextEdit', 'BRR': 'TextEdit', 'CEP': 'TextEdit', 'CNAE': 'TextEdit', 'FAS_CON': 'ValueRelation', 'GRU_TEN': 'ValueRelation', 'TEN_FORN': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'DAT_CON': 'TextEdit', 'POT_INST': 'TextEdit', 'POT_CONT': 'TextEdit', 'DEM_01': 'TextEdit', 'DEM_02': 'TextEdit', 'DEM_03': 'TextEdit', 'DEM_04': 'TextEdit', 'DEM_05': 'TextEdit', 'DEM_06': 'TextEdit', 'DEM_07': 'TextEdit', 'DEM_08': 'TextEdit', 'DEM_09': 'TextEdit', 'DEM_10': 'TextEdit', 'DEM_11': 'TextEdit', 'DEM_12': 'TextEdit', 'ENE_01': 'TextEdit', 'ENE_02': 'TextEdit', 'ENE_03': 'TextEdit', 'ENE_04': 'TextEdit', 'ENE_05': 'TextEdit', 'ENE_06': 'TextEdit', 'ENE_07': 'TextEdit', 'ENE_08': 'TextEdit', 'ENE_09': 'TextEdit', 'ENE_10': 'TextEdit', 'ENE_11': 'TextEdit', 'ENE_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCR': 'TextEdit', });
lyr_UGBT_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON': 'ValueRelation', 'DIST': 'TextEdit', 'PAC': 'TextEdit', 'CEG': 'TextEdit', 'UNI_TR_D': 'ValueRelation', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'LGRD': 'TextEdit', 'BRR': 'TextEdit', 'CEP': 'TextEdit', 'CNAE': 'TextEdit', 'FAS_CON': 'ValueRelation', 'GRU_TEN': 'ValueRelation', 'TEN_FORN': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'DAT_CON': 'TextEdit', 'POT_INST': 'TextEdit', 'POT_CONT': 'TextEdit', 'ENE_01': 'TextEdit', 'ENE_02': 'TextEdit', 'ENE_03': 'TextEdit', 'ENE_04': 'TextEdit', 'ENE_05': 'TextEdit', 'ENE_06': 'TextEdit', 'ENE_07': 'TextEdit', 'ENE_08': 'TextEdit', 'ENE_09': 'TextEdit', 'ENE_10': 'TextEdit', 'ENE_11': 'TextEdit', 'ENE_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCR': 'TextEdit', });
lyr_UNCRAT_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'POT_NOM': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'ARE_LOC': 'ValueRelation', 'DAT_CON': 'TextEdit', 'BANC': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNCRMT_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'POT_NOM': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'ARE_LOC': 'TextEdit', 'DAT_CON': 'TextEdit', 'BANC': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNCRBT_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'ValueRelation', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'POT_NOM': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'UNI_TR_D': 'ValueRelation', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'ARE_LOC': 'ValueRelation', 'DAT_CON': 'TextEdit', 'BANC': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNREAT_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'DAT_CON': 'TextEdit', 'BANC': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNREMT_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'DAT_CON': 'TextEdit', 'BANC': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNSEBT_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'P_N_OPE': 'ValueRelation', 'CAP_ELO': 'ValueRelation', 'COR_NOM': 'ValueRelation', 'TLCD': 'TextEdit', 'DAT_CON': 'TextEdit', 'POS': 'ValueRelation', 'UNI_TR_D': 'ValueRelation', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'ARE_LOC': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNSEMT_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'P_N_OPE': 'ValueRelation', 'CAP_ELO': 'ValueRelation', 'COR_NOM': 'ValueRelation', 'TLCD': 'TextEdit', 'DAT_CON': 'TextEdit', 'POS': 'ValueRelation', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'ARE_LOC': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNSEAT_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'P_N_OPE': 'ValueRelation', 'CAP_ELO': 'ValueRelation', 'COR_NOM': 'ValueRelation', 'TLCD': 'TextEdit', 'DAT_CON': 'TextEdit', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_UNTRD_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'PAC_3': 'TextEdit', 'FASES_CONEXAO_PRIMARIA': 'ValueRelation', 'FASES_CONEXAO_SECUNDARIA': 'ValueRelation', 'FASES_CONEXAO_TERCIARIA': 'ValueRelation', 'SITUACAO_ATIVACAO': 'ValueRelation', 'TIPO_DE_UNIDADE': 'ValueRelation', 'ATRIBUICAO_PERDAS': 'ValueMap', 'TENSAO_LINHA_SECUNDARIO': 'TextEdit', 'CAPACIDADE_ELO_FUSIVEL': 'ValueRelation', 'CAPACIDADE_CHAVE_FUSIVEL': 'ValueRelation', 'TAP': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'CONFIGURACAO_DO_CIRCUITO': 'ValueRelation', 'POSTO': 'ValueRelation', 'POTENCIA_NOMINAL': 'TextEdit', 'PERDA_FERRO': 'TextEdit', 'PERDA_TOTAL': 'TextEdit', 'DATA_CONEXAO': 'TextEdit', 'CIRCUITO_DE_MEDIA_TENSAO': 'ValueRelation', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'ValueRelation', 'SUBESTACAO': 'ValueRelation', 'CONJUNTO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'BANCO_EQUIPAMENTOS': 'TextEdit', 'TIPO_DE_TRAFO': 'ValueRelation', 'MRT': 'Range', 'DESCRICAO': 'TextEdit', 'IMPEDANCIA': 'TextEdit', });
lyr_UNTRS_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'SUBESTACAO': 'ValueRelation', 'BARRAMENTO_1': 'ValueRelation', 'BARRAMENTO_2': 'ValueRelation', 'BARRAMENTO_3': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'PAC_3': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'FASES_CONEXAO_PRIMARIA': 'ValueRelation', 'FASES_CONEXAO_SECUNDARIA': 'ValueRelation', 'FASES_CONEXAO_TERCIARIA': 'ValueRelation', 'SITUACAO_ATIVACAO': 'ValueRelation', 'TIPO_DE_UNIDADE': 'ValueRelation', 'AREA_LOCALIZACAO': 'ValueRelation', 'POTENCIA_NOMINAL': 'ValueRelation', 'POTENCIA_VENTILACAO_FORCADA_01': 'ValueRelation', 'POTENCIA_VENTILACAO_FORCADA_02': 'ValueRelation', 'PERDA_FERRO': 'TextEdit', 'PERDA_TOTAL': 'TextEdit', 'BANCO_EQUIPAMENTOS': 'TextEdit', 'DATA_CONEXAO': 'TextEdit', 'CONJUNTO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'TIPO_TRAFO': 'ValueRelation', 'ALOCACAO_PERDAS': 'ValueRelation', 'ENES_01': 'TextEdit', 'ENES_02': 'TextEdit', 'ENES_03': 'TextEdit', 'ENES_04': 'TextEdit', 'ENES_05': 'TextEdit', 'ENES_06': 'TextEdit', 'ENES_07': 'TextEdit', 'ENES_08': 'TextEdit', 'ENES_09': 'TextEdit', 'ENES_10': 'TextEdit', 'ENES_11': 'TextEdit', 'ENES_12': 'TextEdit', 'ENET_01': 'TextEdit', 'ENET_02': 'TextEdit', 'ENET_03': 'TextEdit', 'ENET_04': 'TextEdit', 'ENET_05': 'TextEdit', 'ENET_06': 'TextEdit', 'ENET_07': 'TextEdit', 'ENET_08': 'TextEdit', 'ENET_09': 'TextEdit', 'ENET_10': 'TextEdit', 'ENET_11': 'TextEdit', 'ENET_12': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_ARAT_1.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DISTRIBUIDORA': 'no label', 'FUNCIONARIOS_PROPRIOS': 'no label', 'FUNCIONARIOS_TERCEIRIZADOS': 'no label', 'DESCRICAO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CONJ_2.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DISTRIBUIDORA': 'no label', 'NOME': 'no label', 'DESCRICAO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SUB_3.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DISTRIBUIDORA': 'no label', 'NOME': 'no label', 'DESCRICAO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SSDAT_4.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PONTO_NOTAVEL_CONECTADO_1': 'no label', 'PONTO_NOTAVEL_CONECTADO_2': 'no label', 'CONJUNTO': 'no label', 'AREA_LOCALIZACAO': 'no label', 'DISTRIBUIDORA': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'FASES_CONEXAO': 'no label', 'TIPO_SEGMENTO_CONDUTOR': 'no label', 'COMPRIMENTO': 'no label', 'DESCRICAO': 'no label', 'Shape_Length': 'no label', });
lyr_SSDMT_5.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PONTO_NOTAVEL_CONECTADO_1': 'no label', 'PONTO_NOTAVEL_CONECTADO_2': 'no label', 'CIRCUITO_DE_MEDIA_TENSAO': 'no label', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'no label', 'SUBESTACAO': 'no label', 'CONJUNTO': 'no label', 'AREA_LOCALIZACAO': 'no label', 'DISTRIBUIDORA': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'FASES_CONEXAO': 'no label', 'TIPO_SEGMENTO_CONDUTOR': 'no label', 'COMPRIMENTO': 'no label', 'DESCRICAO': 'no label', 'Shape_Length': 'no label', });
lyr_SSDBT_6.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PONTO_NOTAVEL_CONECTADO_1': 'no label', 'PONTO_NOTAVEL_CONECTADO_2': 'no label', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'no label', 'CIRCUITO_DE_MEDIA_TENSAO': 'no label', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'no label', 'SUBESTACAO': 'no label', 'CONJUNTO': 'no label', 'AREA_LOCALIZACAO': 'no label', 'FASES_DE_CONEXAO': 'no label', 'DISTRIBUIDORA': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'TIPO_SEGMENTO_CONDUTOR': 'no label', 'COMPRIMENTO': 'no label', 'DESCRICAO': 'no label', 'Shape_Length': 'no label', });
lyr_PONNOT_7.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'TIPO_PONTO_NOTAVEL': 'header label', 'ESTRUTURA': 'header label', 'MATERIAL': 'header label', 'ESFORCO': 'header label', 'ALTURA': 'header label', 'TIPO_ESTRUTURA': 'header label', 'AREA_LOCALIZACAO': 'header label', 'CONJUNTO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_UCAT_8.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PONTO_NOTAVEL_CONECTADO': 'no label', 'DISTRIBUIDORA': 'no label', 'PAC': 'no label', 'CIRCUITO_DE_ALTA_TENSAO': 'no label', 'SUBESTACAO': 'no label', 'CONJUNTO': 'no label', 'MUNICIPIO': 'no label', 'LOGRADOURO': 'no label', 'BAIRRO': 'no label', 'CEP': 'no label', 'CLASSE_SUBCLASSE': 'no label', 'CNAE': 'no label', 'TIPO_CURVA_DE_CARGA': 'no label', 'FASES_CONEXAO': 'no label', 'GRUPO_DE_TENSAO': 'no label', 'TENSAO_DE_FORNECIMENTO': 'no label', 'GRUPO_TARIFARIO': 'no label', 'SITUACAO_ATIVACAO': 'no label', 'DATA_CONEXAO': 'no label', 'CARGA_INSTALADA': 'no label', 'AREA_LOCALIZACAO': 'no label', 'DEM_P_01': 'no label', 'DEM_P_02': 'no label', 'DEM_P_03': 'no label', 'DEM_P_04': 'no label', 'DEM_P_05': 'no label', 'DEM_P_06': 'no label', 'DEM_P_07': 'no label', 'DEM_P_08': 'no label', 'DEM_P_09': 'no label', 'DEM_P_10': 'no label', 'DEM_P_11': 'no label', 'DEM_P_12': 'no label', 'DEM_F_01': 'no label', 'DEM_F_02': 'no label', 'DEM_F_03': 'no label', 'DEM_F_04': 'no label', 'DEM_F_05': 'no label', 'DEM_F_06': 'no label', 'DEM_F_07': 'no label', 'DEM_F_08': 'no label', 'DEM_F_09': 'no label', 'DEM_F_10': 'header label', 'DEM_F_11': 'no label', 'DEM_F_12': 'no label', 'ENE_P_01': 'no label', 'ENE_P_02': 'no label', 'ENE_P_03': 'no label', 'ENE_P_04': 'no label', 'ENE_P_05': 'no label', 'ENE_P_06': 'no label', 'ENE_P_07': 'no label', 'ENE_P_08': 'no label', 'ENE_P_09': 'no label', 'ENE_P_10': 'no label', 'ENE_P_11': 'no label', 'ENE_P_12': 'no label', 'ENE_F_01': 'no label', 'ENE_F_02': 'no label', 'ENE_F_03': 'no label', 'ENE_F_04': 'no label', 'ENE_F_05': 'no label', 'ENE_F_06': 'no label', 'ENE_F_07': 'no label', 'ENE_F_08': 'no label', 'ENE_F_09': 'no label', 'ENE_F_10': 'no label', 'ENE_F_11': 'no label', 'ENE_F_12': 'no label', 'DIC': 'no label', 'FIC': 'no label', 'DESCRICAO': 'no label', });
lyr_UCMT_9.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PONTO_NOTAVEL_CONECTADO': 'no label', 'DISTRIBUIDORA': 'no label', 'PAC': 'no label', 'CIRCUITO_DE_MEDIA_TENSAO': 'no label', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'no label', 'SUBESTACAO': 'no label', 'CONJUNTO': 'no label', 'MUNICIPIO': 'no label', 'LOGRADOURO': 'no label', 'BAIRRO': 'no label', 'CEP': 'no label', 'CLASSE_SUBCLASSE': 'no label', 'CNAE': 'no label', 'TIPO_CURVA_DE_CARGA': 'no label', 'FASES_CONEXAO': 'no label', 'GRUPO_DE_TENSAO': 'no label', 'TENSAO_DE_FORNECIMENTO': 'no label', 'GRUPO_TARIFARIO': 'no label', 'SITUACAO_DE_ATIVACAO': 'no label', 'DATA_CONEXAO': 'no label', 'CARGA_INSTALADA': 'no label', 'AREA_LOCALIZACAO': 'no label', 'DEM_01': 'no label', 'DEM_02': 'no label', 'DEM_03': 'no label', 'DEM_04': 'no label', 'DEM_05': 'no label', 'DEM_06': 'no label', 'DEM_07': 'no label', 'DEM_08': 'no label', 'DEM_09': 'no label', 'DEM_10': 'no label', 'DEM_11': 'no label', 'DEM_12': 'no label', 'ENE_01': 'no label', 'ENE_02': 'no label', 'ENE_03': 'no label', 'ENE_04': 'no label', 'ENE_05': 'no label', 'ENE_06': 'no label', 'ENE_07': 'no label', 'ENE_08': 'no label', 'ENE_09': 'no label', 'ENE_10': 'no label', 'ENE_11': 'no label', 'ENE_12': 'no label', 'DIC': 'no label', 'FIC': 'no label', 'DESCRICAO': 'no label', });
lyr_UCBT_10.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DISTRIBUIDORA': 'no label', 'PAC': 'no label', 'PONTO_NOTAVEL_CONECTADO': 'no label', 'UNIDADE_TRANSFORMADORA_DE_DISTRIBUICAO': 'no label', 'CIRCUITO_DE_MEDIA_TENSAO': 'no label', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'no label', 'SUBESTACAO': 'no label', 'CONJUNTO': 'no label', 'MUNICIPIO': 'no label', 'LOGRADOURO': 'no label', 'BAIRRO': 'no label', 'CEP': 'no label', 'CLASSE_SUBCLASSE': 'no label', 'CNAE': 'no label', 'TIPO_CURVA_DE_CARGA': 'no label', 'FASES_CONEXAO': 'no label', 'GRUPO_DE_TENSAO': 'no label', 'TENSAO_DE_FORNECIMENTO': 'no label', 'GRUPO_TARIFARIO': 'no label', 'SITUACAO_DE_ATIVACAO': 'no label', 'DATA_CONEXAO': 'no label', 'CARGA_INSTALADA': 'no label', 'CORRENTE_DISJUNTOR_GERAL': 'no label', 'AREA_LOCALIZACAO': 'no label', 'ENE_01': 'no label', 'ENE_02': 'no label', 'ENE_03': 'no label', 'ENE_04': 'no label', 'ENE_05': 'no label', 'ENE_06': 'no label', 'ENE_07': 'no label', 'ENE_08': 'no label', 'ENE_09': 'no label', 'ENE_10': 'no label', 'ENE_11': 'no label', 'ENE_12': 'no label', 'DIC': 'no label', 'FIC': 'no label', 'DESCRICAO': 'no label', });
lyr_UGAT_11.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PN_CON': 'no label', 'DIST': 'no label', 'PAC': 'no label', 'CTAT': 'no label', 'CEG': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'SUB': 'no label', 'LGRD': 'no label', 'BRR': 'no label', 'CEP': 'no label', 'CNAE': 'no label', 'FAS_CON': 'no label', 'GRU_TEN': 'no label', 'TEN_FORN': 'no label', 'SIT_ATIV': 'no label', 'DAT_CON': 'no label', 'POT_INST': 'no label', 'POT_CONT': 'no label', 'DEM_P_01': 'no label', 'DEM_P_02': 'no label', 'DEM_P_03': 'no label', 'DEM_P_04': 'no label', 'DEM_P_05': 'no label', 'DEM_P_06': 'no label', 'DEM_P_07': 'no label', 'DEM_P_08': 'no label', 'DEM_P_09': 'no label', 'DEM_P_10': 'no label', 'DEM_P_11': 'no label', 'DEM_P_12': 'no label', 'DEM_F_01': 'no label', 'DEM_F_02': 'no label', 'DEM_F_03': 'no label', 'DEM_F_04': 'no label', 'DEM_F_05': 'no label', 'DEM_F_06': 'no label', 'DEM_F_07': 'no label', 'DEM_F_08': 'no label', 'DEM_F_09': 'no label', 'DEM_F_10': 'no label', 'DEM_F_11': 'no label', 'DEM_F_12': 'no label', 'ENE_P_01': 'no label', 'ENE_P_02': 'no label', 'ENE_P_03': 'no label', 'ENE_P_04': 'no label', 'ENE_P_05': 'no label', 'ENE_P_06': 'no label', 'ENE_P_07': 'no label', 'ENE_P_08': 'no label', 'ENE_P_09': 'no label', 'ENE_P_10': 'no label', 'ENE_P_11': 'no label', 'ENE_P_12': 'no label', 'ENE_F_01': 'no label', 'ENE_F_02': 'no label', 'ENE_F_03': 'no label', 'ENE_F_04': 'no label', 'ENE_F_05': 'no label', 'ENE_F_06': 'no label', 'ENE_F_07': 'no label', 'ENE_F_08': 'no label', 'ENE_F_09': 'no label', 'ENE_F_10': 'no label', 'ENE_F_11': 'no label', 'ENE_F_12': 'no label', 'DIC': 'no label', 'FIC': 'no label', 'DESCR': 'no label', });
lyr_UGMT_12.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PN_CON': 'no label', 'DIST': 'no label', 'PAC': 'no label', 'CEG': 'no label', 'CTMT': 'no label', 'UNI_TR_S': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'LGRD': 'no label', 'BRR': 'no label', 'CEP': 'no label', 'CNAE': 'no label', 'FAS_CON': 'no label', 'GRU_TEN': 'no label', 'TEN_FORN': 'no label', 'SIT_ATIV': 'no label', 'DAT_CON': 'no label', 'POT_INST': 'no label', 'POT_CONT': 'no label', 'DEM_01': 'no label', 'DEM_02': 'no label', 'DEM_03': 'no label', 'DEM_04': 'no label', 'DEM_05': 'no label', 'DEM_06': 'no label', 'DEM_07': 'no label', 'DEM_08': 'no label', 'DEM_09': 'no label', 'DEM_10': 'no label', 'DEM_11': 'no label', 'DEM_12': 'no label', 'ENE_01': 'no label', 'ENE_02': 'no label', 'ENE_03': 'no label', 'ENE_04': 'no label', 'ENE_05': 'no label', 'ENE_06': 'no label', 'ENE_07': 'no label', 'ENE_08': 'no label', 'ENE_09': 'no label', 'ENE_10': 'no label', 'ENE_11': 'no label', 'ENE_12': 'no label', 'DIC': 'no label', 'FIC': 'no label', 'DESCR': 'no label', });
lyr_UGBT_13.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'PN_CON': 'no label', 'DIST': 'no label', 'PAC': 'no label', 'CEG': 'no label', 'UNI_TR_D': 'no label', 'CTMT': 'no label', 'UNI_TR_S': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'LGRD': 'no label', 'BRR': 'no label', 'CEP': 'no label', 'CNAE': 'no label', 'FAS_CON': 'no label', 'GRU_TEN': 'no label', 'TEN_FORN': 'no label', 'SIT_ATIV': 'no label', 'DAT_CON': 'no label', 'POT_INST': 'no label', 'POT_CONT': 'no label', 'ENE_01': 'no label', 'ENE_02': 'no label', 'ENE_03': 'no label', 'ENE_04': 'no label', 'ENE_05': 'no label', 'ENE_06': 'no label', 'ENE_07': 'no label', 'ENE_08': 'no label', 'ENE_09': 'no label', 'ENE_10': 'no label', 'ENE_11': 'no label', 'ENE_12': 'no label', 'DIC': 'no label', 'FIC': 'no label', 'DESCR': 'no label', });
lyr_UNCRAT_14.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DIST': 'no label', 'FAS_CON': 'no label', 'SIT_ATIV': 'no label', 'TIP_UNID': 'no label', 'POT_NOM': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'ARE_LOC': 'no label', 'DAT_CON': 'no label', 'BANC': 'no label', 'POS': 'no label', 'DESCR': 'no label', });
lyr_UNCRMT_15.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DIST': 'no label', 'FAS_CON': 'no label', 'SIT_ATIV': 'no label', 'TIP_UNID': 'no label', 'POT_NOM': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'CTMT': 'no label', 'UNI_TR_S': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'ARE_LOC': 'no label', 'DAT_CON': 'no label', 'BANC': 'no label', 'POS': 'no label', 'DESCR': 'no label', });
lyr_UNCRBT_16.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DIST': 'no label', 'FAS_CON': 'no label', 'SIT_ATIV': 'no label', 'TIP_UNID': 'no label', 'POT_NOM': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'UNI_TR_D': 'no label', 'CTMT': 'no label', 'UNI_TR_S': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'ARE_LOC': 'no label', 'DAT_CON': 'no label', 'BANC': 'no label', 'POS': 'no label', 'DESCR': 'no label', });
lyr_UNREAT_17.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DIST': 'no label', 'FAS_CON': 'no label', 'SIT_ATIV': 'no label', 'TIP_UNID': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'DAT_CON': 'no label', 'BANC': 'no label', 'POS': 'no label', 'DESCR': 'no label', });
lyr_UNREMT_18.set('fieldLabels', {'OBJECTID': 'no label', 'COD_ID': 'no label', 'DIST': 'no label', 'FAS_CON': 'no label', 'SIT_ATIV': 'no label', 'TIP_UNID': 'no label', 'PAC_1': 'no label', 'PAC_2': 'no label', 'CTMT': 'no label', 'UNI_TR_S': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'DAT_CON': 'no label', 'BANC': 'no label', 'POS': 'no label', 'DESCR': 'no label', });
lyr_UNSEBT_19.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DIST': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'FAS_CON': 'no label', 'SIT_ATIV': 'no label', 'TIP_UNID': 'no label', 'P_N_OPE': 'no label', 'CAP_ELO': 'no label', 'COR_NOM': 'no label', 'TLCD': 'no label', 'DAT_CON': 'no label', 'POS': 'no label', 'UNI_TR_D': 'no label', 'CTMT': 'no label', 'UNI_TR_S': 'no label', 'SUB': 'no label', 'CONJ': 'no label', 'MUN': 'no label', 'ARE_LOC': 'no label', 'DESCR': 'no label', });
lyr_UNSEMT_20.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DIST': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'FAS_CON': 'header label', 'SIT_ATIV': 'header label', 'TIP_UNID': 'header label', 'P_N_OPE': 'header label', 'CAP_ELO': 'header label', 'COR_NOM': 'header label', 'TLCD': 'header label', 'DAT_CON': 'header label', 'POS': 'header label', 'CTMT': 'header label', 'UNI_TR_S': 'header label', 'SUB': 'header label', 'CONJ': 'header label', 'MUN': 'header label', 'ARE_LOC': 'header label', 'DESCR': 'header label', });
lyr_UNSEAT_21.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DIST': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'FAS_CON': 'header label', 'SIT_ATIV': 'header label', 'TIP_UNID': 'header label', 'P_N_OPE': 'header label', 'CAP_ELO': 'header label', 'COR_NOM': 'header label', 'TLCD': 'header label', 'DAT_CON': 'header label', 'SUB': 'header label', 'CONJ': 'header label', 'MUN': 'header label', 'POS': 'header label', 'DESCR': 'header label', });
lyr_UNTRD_22.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'PAC_3': 'header label', 'FASES_CONEXAO_PRIMARIA': 'header label', 'FASES_CONEXAO_SECUNDARIA': 'header label', 'FASES_CONEXAO_TERCIARIA': 'header label', 'SITUACAO_ATIVACAO': 'header label', 'TIPO_DE_UNIDADE': 'header label', 'ATRIBUICAO_PERDAS': 'header label', 'TENSAO_LINHA_SECUNDARIO': 'header label', 'CAPACIDADE_ELO_FUSIVEL': 'header label', 'CAPACIDADE_CHAVE_FUSIVEL': 'header label', 'TAP': 'header label', 'AREA_LOCALIZACAO': 'header label', 'CONFIGURACAO_DO_CIRCUITO': 'header label', 'POSTO': 'header label', 'POTENCIA_NOMINAL': 'header label', 'PERDA_FERRO': 'header label', 'PERDA_TOTAL': 'header label', 'DATA_CONEXAO': 'header label', 'CIRCUITO_DE_MEDIA_TENSAO': 'header label', 'UNIDADE_TRANSFORMADORA_DE_SUBESTACAO': 'header label', 'SUBESTACAO': 'header label', 'CONJUNTO': 'header label', 'MUNICIPIO': 'header label', 'BANCO_EQUIPAMENTOS': 'header label', 'TIPO_DE_TRAFO': 'header label', 'MRT': 'header label', 'DESCRICAO': 'header label', 'IMPEDANCIA': 'header label', });
lyr_UNTRS_23.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'SUBESTACAO': 'header label', 'BARRAMENTO_1': 'header label', 'BARRAMENTO_2': 'header label', 'BARRAMENTO_3': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'PAC_3': 'header label', 'DISTRIBUIDORA': 'header label', 'FASES_CONEXAO_PRIMARIA': 'header label', 'FASES_CONEXAO_SECUNDARIA': 'header label', 'FASES_CONEXAO_TERCIARIA': 'header label', 'SITUACAO_ATIVACAO': 'header label', 'TIPO_DE_UNIDADE': 'header label', 'AREA_LOCALIZACAO': 'header label', 'POTENCIA_NOMINAL': 'header label', 'POTENCIA_VENTILACAO_FORCADA_01': 'header label', 'POTENCIA_VENTILACAO_FORCADA_02': 'header label', 'PERDA_FERRO': 'header label', 'PERDA_TOTAL': 'header label', 'BANCO_EQUIPAMENTOS': 'header label', 'DATA_CONEXAO': 'header label', 'CONJUNTO': 'header label', 'MUNICIPIO': 'header label', 'TIPO_TRAFO': 'header label', 'ALOCACAO_PERDAS': 'header label', 'ENES_01': 'header label', 'ENES_02': 'header label', 'ENES_03': 'header label', 'ENES_04': 'header label', 'ENES_05': 'header label', 'ENES_06': 'header label', 'ENES_07': 'header label', 'ENES_08': 'header label', 'ENES_09': 'header label', 'ENES_10': 'header label', 'ENES_11': 'header label', 'ENES_12': 'header label', 'ENET_01': 'header label', 'ENET_02': 'header label', 'ENET_03': 'header label', 'ENET_04': 'header label', 'ENET_05': 'header label', 'ENET_06': 'header label', 'ENET_07': 'header label', 'ENET_08': 'header label', 'ENET_09': 'header label', 'ENET_10': 'header label', 'ENET_11': 'header label', 'ENET_12': 'header label', 'DESCRICAO': 'header label', });
lyr_UNTRS_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});