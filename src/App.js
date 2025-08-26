import React, { useState } from 'react';
import { MapPin, Phone, Star, AlertTriangle, User, Shield, Home, Plus, List, Settings } from 'lucide-react';

const NoiseComplaintApp = () => {
  const [userType, setUserType] = useState('vecino'); // 'vecino' o 'policia'
  const [currentView, setCurrentView] = useState('landing'); // Comienza en landing page
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      type: 'Fiesta con música alta',
      address: 'Av. Libertador 1234, Las Condes',
      time: '23:45',
      date: '24/08/2025',
      status: 'pendiente',
      priority: 'alta',
      decibels: 75,
      coordinates: { lat: -33.4194, lng: -70.6050 },
      reporter: 'Usuario123',
      rating: null
    },
    {
      id: 2,
      type: 'Construcción nocturna',
      address: 'San Martín 567, Providencia',
      time: '02:15',
      date: '24/08/2025',
      status: 'en_proceso',
      priority: 'media',
      decibels: 65,
      coordinates: { lat: -33.4372, lng: -70.6320 },
      reporter: 'Usuario456',
      rating: null
    },
    {
      id: 3,
      type: 'Vehículos con música',
      address: 'Pocuro 890, Ñuñoa',
      time: '01:30',
      date: '23/08/2025',
      status: 'resuelto',
      priority: 'baja',
      decibels: 52,
      coordinates: { lat: -33.4569, lng: -70.6083 },
      reporter: 'Usuario789',
      rating: 4
    }
  ]);

  const [newComplaint, setNewComplaint] = useState({
    type: '',
    address: '',
    description: '',
    decibels: 45
  });

  // Componente de página principal/landing
  const LandingPage = () => (
    <div className="p-6 space-y-8 text-center min-h-screen flex flex-col justify-center">
      {/* Header principal */}
      <div className="space-y-4">
        <div className="text-6xl mb-4">🔇</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Ruidos Molestos
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Aplicación para denunciar y gestionar ruidos molestos en zonas urbanas
        </p>
      </div>

      {/* Información sobre límites */}
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
        <h3 className="font-semibold text-blue-800 mb-3">📊 Límites Legales</h3>
        <div className="text-sm text-blue-700 space-y-2">
          <p><strong>Zona Residencial:</strong> Máximo 45 dB</p>
          <p><strong>Horario Protegido:</strong> 21:00 - 07:00 hrs</p>
          <p><strong>Multas:</strong> Desde 1 UTM hasta 20 UTM</p>
        </div>
      </div>

      {/* Estadísticas simuladas */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-red-600 mb-1">847</div>
          <div className="text-sm text-gray-600">Denuncias este mes</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600 mb-1">73%</div>
          <div className="text-sm text-gray-600">Casos resueltos</div>
        </div>
      </div>

      {/* Botones de acceso */}
      <div className="space-y-4 mt-8">
        <button 
          onClick={() => {
            setUserType('vecino');
            setCurrentView('home');
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 shadow-lg transition-colors"
        >
          <User size={24} />
          <div className="text-left">
            <div className="font-semibold text-lg">Soy Vecino</div>
            <div className="text-sm opacity-90">Realizar denuncias</div>
          </div>
        </button>
        
        <button 
          onClick={() => {
            setUserType('policia');
            setCurrentView('home');
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-3 shadow-lg transition-colors"
        >
          <Shield size={24} />
          <div className="text-left">
            <div className="font-semibold text-lg">Fuerza del Orden</div>
            <div className="text-sm opacity-90">Gestionar denuncias</div>
          </div>
        </button>
      </div>

      {/* Información adicional */}
      <div className="mt-8 space-y-3 text-sm text-gray-500">
        <p>🏘️ Para una convivencia vecinal armónica</p>
        <p>⚡ Respuesta rápida y eficiente</p>
        <p>📱 Fácil de usar desde tu móvil</p>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          Desarrollado por Grupo 8 - Ingeniería en Computación e Informática
        </p>
      </div>
    </div>
  );

  // Componente para Vecinos - Vista Principal
  const VecinoHome = () => (
    <div className="p-6 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">QuietZone</h2>
        <p className="text-gray-600">Denuncia ruidos molestos de forma rápida</p>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">
            {complaints.filter(c => c.reporter === 'Usuario123').length}
          </div>
          <div className="text-sm text-gray-600">Mis denuncias</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">
            {complaints.filter(c => c.status === 'resuelto' && c.reporter === 'Usuario123').length}
          </div>
          <div className="text-sm text-gray-600">Resueltas</div>
        </div>
      </div>

      {/* Botón principal para nueva denuncia */}
      <button 
        onClick={() => setCurrentView('nueva_denuncia')}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-lg"
      >
        <AlertTriangle size={24} />
        <span className="text-lg font-semibold">Nueva Denuncia</span>
      </button>

      {/* Accesos rápidos */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentView('mis_denuncias')}
          className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center space-x-3"
        >
          <List className="text-gray-600" size={20} />
          <span className="text-gray-700">Mis Denuncias</span>
        </button>
        <button className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg flex items-center space-x-3">
          <Phone className="text-gray-600" size={20} />
          <span className="text-gray-700">Emergencia</span>
        </button>
      </div>

      {/* Información útil */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">💡 Recuerda</h3>
        <p className="text-sm text-yellow-700">
          Los ruidos molestos se consideran a partir de 45 decibeles entre las 21:00 y 07:00 hrs en zonas residenciales.
        </p>
      </div>
    </div>
  );

  // Componente para Nueva Denuncia
  const NuevaDenuncia = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => setCurrentView('home')}
          className="text-blue-500 hover:text-blue-700"
        >
          ← Volver
        </button>
        <h2 className="text-xl font-bold">Nueva Denuncia</h2>
        <div></div>
      </div>

      <div className="space-y-6">
        {/* Tipo de ruido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de ruido molesto
          </label>
          <select 
            value={newComplaint.type}
            onChange={(e) => setNewComplaint({...newComplaint, type: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccionar tipo</option>
            <option value="Fiesta con música alta">Fiesta con música alta</option>
            <option value="Construcción nocturna">Construcción nocturna</option>
            <option value="Vehículos con música">Vehículos con música</option>
            <option value="Ladridos de perros">Ladridos de perros</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dirección exacta
          </label>
          <div className="relative">
            <input 
              type="text"
              value={newComplaint.address}
              onChange={(e) => setNewComplaint({...newComplaint, address: e.target.value})}
              placeholder="Ej: Av. Providencia 1234, Providencia"
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <MapPin className="absolute right-3 top-3 text-gray-400" size={20} />
          </div>
          <button type="button" className="mt-2 text-sm text-blue-500 hover:text-blue-700">
            📍 Usar mi ubicación actual
          </button>
        </div>

        {/* Nivel de ruido estimado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nivel de ruido estimado: {newComplaint.decibels} dB
          </label>
          <input 
            type="range"
            min="30"
            max="120"
            value={newComplaint.decibels}
            onChange={(e) => setNewComplaint({...newComplaint, decibels: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>30 dB</span>
            <span className="text-red-500">45 dB (Límite)</span>
            <span>120 dB</span>
          </div>
        </div>

        {/* Descripción adicional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción adicional (opcional)
          </label>
          <textarea 
            value={newComplaint.description}
            onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
            placeholder="Describe brevemente la situación..."
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Botones */}
        <div className="flex space-x-4">
          <button 
            type="button"
            onClick={() => setCurrentView('home')}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              // Simular envío de denuncia
              const nuevaDenuncia = {
                id: complaints.length + 1,
                ...newComplaint,
                time: new Date().toLocaleTimeString('es-CL', {hour: '2-digit', minute: '2-digit'}),
                date: new Date().toLocaleDateString('es-CL'),
                status: 'pendiente',
                priority: newComplaint.decibels > 70 ? 'alta' : newComplaint.decibels > 55 ? 'media' : 'baja',
                coordinates: { lat: -33.4194, lng: -70.6050 },
                reporter: 'Usuario123',
                rating: null
              };
              setComplaints([...complaints, nuevaDenuncia]);
              setNewComplaint({ type: '', address: '', description: '', decibels: 45 });
              setCurrentView('home');
            }}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium"
          >
            Enviar Denuncia
          </button>
        </div>
      </div>
    </div>
  );

  // Componente para Mis Denuncias
  const MisDenuncias = () => {
    const misDenuncias = complaints.filter(c => c.reporter === 'Usuario123');
    
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => setCurrentView('home')}
            className="text-blue-500 hover:text-blue-700"
          >
            ← Volver
          </button>
          <h2 className="text-xl font-bold">Mis Denuncias</h2>
          <div></div>
        </div>

        {misDenuncias.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <AlertTriangle size={48} className="mx-auto mb-4 text-gray-300" />
            <p>No tienes denuncias registradas</p>
            <button 
              onClick={() => setCurrentView('nueva_denuncia')}
              className="mt-4 text-blue-500 hover:text-blue-700"
            >
              Crear primera denuncia
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {misDenuncias.map(complaint => (
              <ComplaintCard 
                key={complaint.id} 
                complaint={complaint} 
                showRating={complaint.status === 'resuelto'}
                onRate={(rating) => {
                  setComplaints(complaints.map(c => 
                    c.id === complaint.id ? {...c, rating} : c
                  ));
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Componente para Policía - Vista de Mapa
  const PoliciaHome = () => (
    <div className="p-6 space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Panel Policial</h2>
        <p className="text-gray-600">Gestión de denuncias por ruidos molestos</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-red-50 p-3 rounded-lg text-center">
          <div className="text-lg font-bold text-red-600">
            {complaints.filter(c => c.status === 'pendiente').length}
          </div>
          <div className="text-xs text-gray-600">Pendientes</div>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg text-center">
          <div className="text-lg font-bold text-yellow-600">
            {complaints.filter(c => c.status === 'en_proceso').length}
          </div>
          <div className="text-xs text-gray-600">En Proceso</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg text-center">
          <div className="text-lg font-bold text-green-600">
            {complaints.filter(c => c.status === 'resuelto').length}
          </div>
          <div className="text-xs text-gray-600">Resueltas</div>
        </div>
      </div>

      {/* Mapa simulado */}
      <div className="bg-gray-100 h-64 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="text-gray-400" size={32} />
        </div>
        <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
          <div className="text-xs text-gray-600">Denuncias Activas</div>
        </div>
        
        {/* Puntos de denuncias en el mapa */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>

      {/* Denuncias prioritarias */}
      <div>
        <h3 className="font-semibold mb-3">Denuncias Prioritarias</h3>
        <div className="space-y-3">
          {complaints.filter(c => c.priority === 'alta' && c.status !== 'resuelto').map(complaint => (
            <div key={complaint.id} className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-red-800">{complaint.type}</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                  ALTA PRIORIDAD
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{complaint.address}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{complaint.time} - {complaint.decibels} dB</span>
                <button 
                  onClick={() => {
                    setComplaints(complaints.map(c => 
                      c.id === complaint.id ? {...c, status: 'en_proceso'} : c
                    ));
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                >
                  Atender
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Componente de tarjeta de denuncia
  const ComplaintCard = ({ complaint, showRating, onRate }) => {
    const getStatusColor = (status) => {
      switch(status) {
        case 'pendiente': return 'bg-red-50 text-red-700 border-red-200';
        case 'en_proceso': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
        case 'resuelto': return 'bg-green-50 text-green-700 border-green-200';
        default: return 'bg-gray-50 text-gray-700 border-gray-200';
      }
    };

    const getPriorityColor = (priority) => {
      switch(priority) {
        case 'alta': return 'text-red-600';
        case 'media': return 'text-yellow-600';
        case 'baja': return 'text-green-600';
        default: return 'text-gray-600';
      }
    };

    return (
      <div className={`border p-4 rounded-lg ${getStatusColor(complaint.status)}`}>
        <div className="flex justify-between items-start mb-2">
          <span className="font-medium">{complaint.type}</span>
          <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(complaint.priority)} bg-white`}>
            {complaint.priority.toUpperCase()}
          </span>
        </div>
        
        <p className="text-sm mb-2">{complaint.address}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
          <span>{complaint.date} - {complaint.time}</span>
          <span>{complaint.decibels} dB</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs capitalize">
            {complaint.status.replace('_', ' ')}
          </span>
          
          {showRating && !complaint.rating && (
            <div className="flex items-center space-x-1">
              <span className="text-xs">Calificar:</span>
              {[1,2,3,4,5].map(rating => (
                <button 
                  key={rating}
                  onClick={() => onRate(rating)}
                  className="text-yellow-400 hover:text-yellow-500"
                >
                  <Star size={14} />
                </button>
              ))}
            </div>
          )}
          
          {complaint.rating && (
            <div className="flex items-center space-x-1">
              <span className="text-xs">Calificación:</span>
              <div className="flex">
                {[...Array(complaint.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Navegación inferior
  const BottomNavigation = () => {
    // No mostrar navegación en landing page
    if (currentView === 'landing') return null;
    
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
        <div className="flex justify-around">
          {userType === 'vecino' ? (
            <>
              <button 
                onClick={() => setCurrentView('home')}
                className={`flex flex-col items-center py-2 px-4 ${currentView === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                <Home size={20} />
                <span className="text-xs mt-1">Inicio</span>
              </button>
              <button 
                onClick={() => setCurrentView('nueva_denuncia')}
                className={`flex flex-col items-center py-2 px-4 ${currentView === 'nueva_denuncia' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                <Plus size={20} />
                <span className="text-xs mt-1">Denunciar</span>
              </button>
              <button 
                onClick={() => setCurrentView('mis_denuncias')}
                className={`flex flex-col items-center py-2 px-4 ${currentView === 'mis_denuncias' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                <List size={20} />
                <span className="text-xs mt-1">Mis Denuncias</span>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setCurrentView('home')}
                className={`flex flex-col items-center py-2 px-4 ${currentView === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                <MapPin size={20} />
                <span className="text-xs mt-1">Mapa</span>
              </button>
              <button className="flex flex-col items-center py-2 px-4 text-gray-500">
                <List size={20} />
                <span className="text-xs mt-1">Denuncias</span>
              </button>
            </>
          )}
          <button className="flex flex-col items-center py-2 px-4 text-gray-500">
            <Settings size={20} />
            <span className="text-xs mt-1">Config</span>
          </button>
        </div>
      </div>
    );
  };

  // Header con selector de tipo de usuario
  const Header = () => {
    // No mostrar header en landing page
    if (currentView === 'landing') return null;
    
    return (
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {userType === 'vecino' ? <User size={20} /> : <Shield size={20} />}
          <span className="font-medium capitalize">{userType}</span>
        </div>
        <button 
          onClick={() => setCurrentView('landing')}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
        >
          Salir
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen">
      <Header />
      
      <div className={currentView === 'landing' ? '' : 'pb-20'}> {/* Espacio para navegación inferior solo si no es landing */}
        {currentView === 'landing' ? <LandingPage /> :
         userType === 'vecino' ? (
          currentView === 'home' ? <VecinoHome /> :
          currentView === 'nueva_denuncia' ? <NuevaDenuncia /> :
          currentView === 'mis_denuncias' ? <MisDenuncias /> :
          <VecinoHome />
        ) : (
          <PoliciaHome />
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default NoiseComplaintApp;