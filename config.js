// ========= 1. CONFIGURACIÓN Y DATOS ===========

const config = {
    // Credenciales y Estilo Base
    accessToken: 'pk.eyJ1IjoibmV3dHJhbCIsImEiOiJjazJrcDY4Y2gxMmg3M2JvazU4OXV6NHZqIn0.VO5GkvBq_PSJHvX7T8H9jQ', 
    style: 'mapbox://styles/newtral/cmfcdokcl006f01sd20984lhq',
    
    // Expresión de color para estaciones (campo 'accesible'):
    STATION_COLOR_EXPRESSION: [
        "match",
        ["get", "accesible"],
        1, "#01f3b3", // Accesible
        0, "#494949", // No accesible
        "#494949"     // Valor por defecto
    ],
    
    // Expresión de color para líneas (campo 'route_color', añadiendo '#'):
    LINE_COLOR_EXPRESSION: [
        "concat", 
        "#", 
        ["get", "route_color"]
    ],

    // Expresión para el color de las áreas de accesibilidad
    AREA_COLOR_EXPRESSION: [
        "case",
        // 1. Verificar si el campo 'value' existe y es igual a 600
        ["all", ["has", "value"], ["==", ["get", "value"], 600]],
        "#01f3b3", // Color si es 600

        // 2. Si existe y es diferente de 600, aplicar el otro color (80F9D9)
        ["has", "value"], 
        "#80F9D9", // Color si tiene valor, pero no es 600

        // 3. Fallback final (si el campo no existe o es nulo, será ROJO para debug)
        "red" // Fallback seguro para que veas el error si la lógica falla
    ],

    // Definición de Capítulos (Las Coordenadas de Navegación)
    chapters: [
        { 
            id: 'nacional',
            title: '--Vista Nacional--', 
            location: {
                desktop: {"center":[-4.5168,40.4391],"zoom":5.79,"pitch":0,"bearing":0} ,
                mobile: {"center":[-2.9756,41.0247],"zoom":4.39,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'madrid',
            title: 'Madrid', 
            location: {
                desktop: {"center":[-3.7276,40.4776],"zoom":9.09,"pitch":0,"bearing":0} ,
                mobile: {"center":[-3.7292,40.507],"zoom":7.85,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'barcelona',
            title: 'Barcelona', 
            location: {
                desktop: {"center":[2.0809,41.8682],"zoom":8.39,"pitch":0,"bearing":0} ,
                mobile: {"center":[2.1491,41.9122],"zoom":7.54,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'Valencia',
            title: 'València', 
            location: {
                desktop: {"center":[-0.563,39.4683],"zoom":8.58,"pitch":0,"bearing":0} ,
                mobile: {"center":[-0.6254,39.6342],"zoom":7.86,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'sevilla',
            title: 'Sevilla', 
            location: {
                desktop: {"center":[-6.0085,37.4629],"zoom":8.7,"pitch":0,"bearing":0} ,
                mobile: {"center":[-5.8791,37.503],"zoom":8.48,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'bilbao',
            title: 'Bilbao', 
            location: {
                desktop: {"center":[-3.0089,43.1866],"zoom":10.18,"pitch":0,"bearing":0} ,
                mobile: {"center":[-3.0378,43.2193],"zoom":9.63,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'asturias',
            title: 'Asturias', 
            location: {
                desktop: {"center":[-5.7593,43.3703],"zoom":9.55,"pitch":0,"bearing":0} ,
                mobile: {"center":[-5.7579,43.3844],"zoom":8.41,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'cantabria',
            title: 'Cantabria', 
            location: {
                desktop: {"center":[-3.9925,43.278],"zoom":9.53,"pitch":0,"bearing":0} ,
                mobile: {"center":[-3.9783,43.366],"zoom":8.88,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'murcia-alicante',
            title: 'Murcia/Alicante', 
            location: {
                desktop: {"center":[-1.187,37.9528],"zoom":8.59,"pitch":0,"bearing":0} ,
                mobile: {"center":[-1.1232,37.924],"zoom":7.63,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'cadiz',
            title: 'Cádiz', 
            location: {
                desktop: {"center":[-6.2289,36.5852],"zoom":10.34,"pitch":0,"bearing":0} ,
                mobile: {"center":[-6.1809,36.6009],"zoom":10.13,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'malaga',
            title: 'Málaga', 
            location: {
                desktop: {"center":[-4.5496,36.6885],"zoom":10.35,"pitch":0,"bearing":0} ,
                mobile: {"center":[-4.5604,36.7],"zoom":9.67,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'cartagena',
            title: 'Cartagena', 
            location: {
                desktop: {"center":[-0.8853,37.6179],"zoom":11.31,"pitch":0,"bearing":0} ,
                mobile: {"center":[-0.9026,37.6139],"zoom":9.98,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'ferrol',
            title: 'Ferrol', 
            location: {
                desktop: {"center":[-8.0207,43.6223],"zoom":10.17,"pitch":0,"bearing":0} ,
                mobile: {"center":[-8.0354,43.6478],"zoom":9.25,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'leon',
            title: 'León', 
            location: {
                desktop: {"center":[-5.2027,42.7353],"zoom":9.61,"pitch":0,"bearing":0} ,
                mobile: {"center":[-5.2131,42.7701],"zoom":8.51,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'san-sebastian',
            title: 'San Sebastián', 
            location: {
                desktop: {"center":[-2.0738,43.1988],"zoom":10.15,"pitch":0,"bearing":0} ,
                mobile: {"center":[-2.0716,43.2792],"zoom":8.91,"pitch":0,"bearing":0}
            }
        },
        { 
            id: 'zaragoza',
            title: 'Zaragoza', 
            location: {
                desktop: {"center":[-0.9361,41.6815],"zoom":11.37,"pitch":0,"bearing":0} ,
                mobile: {"center":[-0.9395,41.6808],"zoom":10.49,"pitch":0,"bearing":0}
            }
        }
    ]
};


// ========= 2. INICIALIZACIÓN Y FUNCIONES MAPBOX ===========

// Función para determinar el tipo de dispositivo/pantalla
function checkDeviceType() {
    return window.innerWidth < 768 ? 'mobile' : 'desktop';
}

// Función auxiliar para obtener la ubicación según el dispositivo
function getLocationParams(chapterId) {
    const chapter = config.chapters.find(chap => chap.id === chapterId);
    if (!chapter) return config.chapters[0].location[checkDeviceType()]; // Fallback a nacional
    
    const deviceType = checkDeviceType();
    return chapter.location[deviceType];
}


// 2.1. Inicialización del Mapa (¡CORREGIDO!)
mapboxgl.accessToken = config.accessToken;

// Obtenemos los parámetros iniciales de la vista Nacional antes de construir el mapa
const initialParams = getLocationParams('nacional');

const map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: initialParams.center,
    zoom: initialParams.zoom,
    bearing: initialParams.bearing, 
    pitch: initialParams.pitch,
    renderWorldCopies: false, 
    interactive: true
});

// 2.2. Carga de Capas, Fuentes y Eventos al iniciar el mapa
map.on("load", function () {
    
    // --- Fuentes de Datos ---
    map.addSource('lineas_cercanias_source', {
        type: 'vector', 
        url: 'mapbox://newtral.1014pr2h' 
    });
    map.addSource('estacion_source', {
        type: 'vector', 
        url: 'mapbox://newtral.c6soazn3'
    });
    map.addSource('area-10-15min_source', {
        type: 'vector', 
        url: 'mapbox://newtral.c4wuh5zq'
    });


    // --- Capas de Visualización ---
    map.addLayer({
        'id': 'lineas_cercanias_layer', 
        'type': 'line',
        'source': 'lineas_cercanias_source',
        'source-layer': 'lineas_cercanias_geometria-bxvgvk',
        // APLICACIÓN DEL FILTRO: Excluir los shape_id especificados - no son cercanías
        'filter': [
            'all', 
            ['!=', ['get', 'shape_id'], '63_C1'],
            ['!=', ['get', 'shape_id'], '51_R11'],
            ['!=', ['get', 'shape_id'], '51_R13'],
            ['!=', ['get', 'shape_id'], '51_R14'],
            ['!=', ['get', 'shape_id'], '51_R15'],
            ['!=', ['get', 'shape_id'], '51_R16'],
            ['!=', ['get', 'shape_id'], '51_R17'],
            ['!=', ['get', 'shape_id'], '51_RT1']
        ],
        // Elemntos visuales de las líneas
        'paint': {
            'line-color': config.LINE_COLOR_EXPRESSION, 
            'line-width': 3 
        }
    }); 

    map.addLayer({
        'id': 'estacion_layer', 
        'type': 'circle',
        'source': 'estacion_source',
        'source-layer': 'estaciones_geometria-6rfokl',
        'paint': {
            'circle-color': config.STATION_COLOR_EXPRESSION, 
            'circle-radius': 4,
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.3
        }
    });

    map.addLayer({
        "id": "area-10-15min",
        "type": "fill",
        "source": "area-10-15min_source",
        "source-layer": "isochrones_10-15-2oad7z",
        "paint": {
            "fill-color": config.AREA_COLOR_EXPRESSION,
            "fill-opacity": 0.6
        }
    });

    // Luego la capa de borde (sin transparencia)
    map.addLayer({
        "id": "area-10-15min-border",
        "type": "line",
        "source": "area-10-15min_source",
        "source-layer": "isochrones_10-15-2oad7z",
        "paint": {
            "line-color": config.AREA_COLOR_EXPRESSION,  // Mismo color que el relleno
            "line-width": 2.5,  // Ajusta el grosor según prefieras
            "line-opacity": 1  // Sin transparencia
        }
    });
    
    setupCitySelector();
    setupStationPopups(); 
});


// ========= 3. LÓGICA DE INTERACTIVIDAD ===========

// 3.1. Lógica del Desplegable y Navegación
function setupCitySelector() {
    const selector = document.getElementById('city-selector');

    // 1. AÑADIR LA OPCIÓN MANUAL POR DEFECTO
    const defaultOption = document.createElement('option');
    defaultOption.value = 'nacional';
    defaultOption.textContent = 'Vista Nacional';
    selector.appendChild(defaultOption);

    // 2. ITERAR Y AÑADIR SOLO LAS CIUDADES
    config.chapters.forEach(chapter => {
        
        // **CONDICIÓN DE EXCLUSIÓN:** Si es el capítulo nacional, lo saltamos.
        if (chapter.id === 'nacional') return; 

        // Si el capítulo es una región (zoom > 5.6)
        if (chapter.location.desktop.zoom > 5.6) { 
            const option = document.createElement('option');
            option.value = chapter.id;
            option.textContent = chapter.title;
            selector.appendChild(option);
        }
    });
    
    // Manejador de eventos para el zoom al seleccionar
    selector.addEventListener('change', function() {
        const selectedId = this.value;
        
        const locationParams = getLocationParams(selectedId);
        
        map.flyTo({
            center: locationParams.center,
            zoom: locationParams.zoom,
            pitch: locationParams.pitch,
            bearing: locationParams.bearing,
            duration: 5000
        });
    });
}

// Nota importante: Lógica de 'resize' simplificada y corregida
window.addEventListener('resize', () => {
    // Si la pantalla cambia de tamaño (o se gira el móvil)
    const selectedId = document.getElementById('city-selector').value || 'nacional';
    
    const locationParams = getLocationParams(selectedId);
    
    // Usamos jumpTo para un reajuste instantáneo y eficiente al cambiar de tamaño
    map.jumpTo({
        center: locationParams.center,
        zoom: locationParams.zoom,
        pitch: locationParams.pitch,
        bearing: locationParams.bearing
    });
});


// 3.2. LÓGICA DE POP-UPS (se mantiene sin cambios)
function setupStationPopups() {
    let popup; 

    const createPopupContent = (props) => {
        const estacionNombre = props.estacion || 'Nombre Desconocido';
        const esAccesible = props.accesible; 
        
        let content = 
            `<big><b><big>${estacionNombre}</big></b></big><br>`;

        if (esAccesible === 0) {
            content += 
                `<br><span style="border-bottom:solid 3px #cf023d; color:black"><b><big>ATENCIÓN: estación no accesible</big></b></span>`;
        } else if (esAccesible === 1) {
            content += 
                `<br><span style="background:#01f3b3; padding:4px 8px; border-radius:999px; color:black; font-weight:bold; box-shadow:0px 4px 18px rgba(0,0,0,0.1); cursor:pointer;">Estación accesible</span>`;
        }
        return content;
    };

    // 1. Mostrar Pop-up al pasar el ratón
    map.on('mouseenter', 'estacion_layer', function (e) {
        map.getCanvas().style.cursor = 'pointer';
        
        if (popup) popup.remove();

        const props = e.features[0].properties;
        popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(createPopupContent(props))
            .addTo(map);
    });

    // 2. Ocultar Pop-up al quitar el ratón
    map.on('mouseleave', 'estacion_layer', function () {
        map.getCanvas().style.cursor = '';
        if (popup) {
            popup.remove();
            popup = null;
        }
    });

    // 3. Funcionalidad de Clic 
    map.on('click', 'estacion_layer', function (e) {
        if (popup) popup.remove(); 

        const props = e.features[0].properties;
        new mapboxgl.Popup() 
            .setLngLat(e.lngLat)
            .setHTML(createPopupContent(props))
            .addTo(map);
    });
}


// Función de volcado de configuración (se mantiene)
function dumpCurrentChapterConfig() {
    const center = map.getCenter();
    const zoom = map.getZoom();
    const pitch = map.getPitch();
    const bearing = map.getBearing();

    const configObject = {
        center: [parseFloat(center.lng.toFixed(4)), parseFloat(center.lat.toFixed(4))],
        zoom: parseFloat(zoom.toFixed(2)),
        pitch: parseFloat(pitch.toFixed(1)),
        bearing: parseFloat(bearing.toFixed(1))
    };

    console.log(JSON.stringify(configObject));
}