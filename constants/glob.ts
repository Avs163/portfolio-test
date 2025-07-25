export const globeConfig = {
    pointSize: 2.5,
    globeColor: "#1a237e",
    showAtmosphere: true,
    atmosphereColor: "#3d5afe",
    atmosphereAltitude: 0.15,
    emissive: "#1a237e",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#bbdefb",
    directionalLeftLight: "#e3f2fd",
    directionalTopLight: "#ffffff",
    pointLight: "#e3f2fd",
    arcTime: 1200,
    arcLength: 0.95,
    rings: 7,
    maxRings: 7,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
};

export const colors = [
    "#10b981", // Emerald
    "#059669", // Green
    "#06b6d4", // Cyan
    "#14b8a6", // Teal
    "#22c55e", // Lime Green
];

export const globArcs = [
    {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 1,
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 1,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -1.303396,
        endLng: 36.852443,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 2,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 2,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 3.139,
        endLng: 101.6869,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 2,
        startLat: -15.785493,
        startLng: -47.909029,
        endLat: 36.162809,
        endLng: -115.119411,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 3,
        startLat: -33.8688,
        startLng: 151.2093,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 3,
        startLat: 21.3099,
        startLng: -157.8581,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 3,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 4,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 4,
        startLat: -34.6037,
        startLng: -58.3816,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 4,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 5,
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 5,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: -33.8688,
        endLng: 151.2093,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 5,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 48.8566,
        endLng: -2.3522,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 6,
        startLat: -15.432563,
        startLng: 28.315853,
        endLat: 1.094136,
        endLng: -63.34546,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 6,
        startLat: 37.5665,
        startLng: 126.978,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 6,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 51.5072,
        endLng: -0.1276,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 7,
        startLat: -19.885592,
        startLng: -43.951191,
        endLat: -15.595412,
        endLng: -56.05918,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 7,
        startLat: 48.8566,
        startLng: -2.3522,
        endLat: 52.52,
        endLng: 13.405,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 7,
        startLat: 52.52,
        startLng: 13.405,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 8,
        startLat: -8.833221,
        startLng: 13.264837,
        endLat: -33.936138,
        endLng: 18.436529,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 8,
        startLat: 49.2827,
        startLng: -123.1207,
        endLat: 52.3676,
        endLng: 4.9041,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 8,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 9,
        startLat: 51.5072,
        startLng: -0.1276,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 9,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 9,
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 10,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: 28.6139,
        endLng: 77.209,
        arcAlt: 0.7,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 10,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 31.2304,
        endLng: 121.4737,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 10,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 52.3676,
        endLng: 4.9041,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 11,
        startLat: 41.9028,
        startLng: 12.4964,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 11,
        startLat: -6.2088,
        startLng: 106.8456,
        endLat: 31.2304,
        endLng: 121.4737,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 11,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 1.3521,
        endLng: 103.8198,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 12,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 37.7749,
        endLng: -122.4194,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 12,
        startLat: 35.6762,
        startLng: 139.6503,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 12,
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 13,
        startLat: 52.52,
        startLng: 13.405,
        endLat: 22.3193,
        endLng: 114.1694,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 13,
        startLat: 11.986597,
        startLng: 8.571831,
        endLat: 35.6762,
        endLng: 139.6503,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 13,
        startLat: -22.9068,
        startLng: -43.1729,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 14,
        startLat: -33.936138,
        startLng: 18.436529,
        endLat: 21.395643,
        endLng: 39.883798,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 15,
        startLat: -22.9068,
        startLng: -43.1311,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.1,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 16,
        startLat: -33.936138,
        startLng: 18.436529,
        endLat: 21.395643,
        endLng: 39.883798,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 16,
        startLat: 33.8688,
        startLng: 151.2093,
        endLat: 55.7558,
        endLng: 37.6173,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 16,
        startLat: 40.7128,
        startLng: -74.006,
        endLat: 34.0522,
        endLng: -118.2437,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 17,
        startLat: 19.4326,
        startLng: -99.1332,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 17,
        startLat: -34.6037,
        startLng: -58.3816,
        endLat: 37.7749,
        endLng: -122.4194,
        arcAlt: 0.4,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 18,
        startLat: 13.7563,
        startLng: 100.5018,
        endLat: 48.8566,
        endLng: 2.3522,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 18,
        startLat: 25.2048,
        startLng: 55.2708,
        endLat: 41.9028,
        endLng: 12.4964,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 19,
        startLat: 51.1657,
        startLng: 10.4515,
        endLat: 35.6895,
        endLng: 139.6917,
        arcAlt: 0.4,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 19,
        startLat: -25.2744,
        startLng: 133.7751,
        endLat: 51.5074,
        endLng: -0.1278,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 20,
        startLat: 40.7306,
        startLng: -73.9352,
        endLat: -33.8688,
        endLng: 151.2093,
        arcAlt: 0.5,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 20,
        startLat: 39.9042,
        startLng: 116.4074,
        endLat: 28.6139,
        endLng: 77.209,
        arcAlt: 0.4,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 21,
        startLat: -1.2921,
        startLng: 36.8219,
        endLat: 59.3293,
        endLng: 18.0686,
        arcAlt: 0.2,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 21,
        startLat: 55.7558,
        startLng: 37.6173,
        endLat: -34.6037,
        endLng: -58.3816,
        arcAlt: 0.6,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 22,
        startLat: 35.6895,
        startLng: 139.6917,
        endLat: -22.9068,
        endLng: -43.1729,
        arcAlt: 0.3,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
        order: 22,
        startLat: -26.2041,
        startLng: 28.0473,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.4,
        color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
];