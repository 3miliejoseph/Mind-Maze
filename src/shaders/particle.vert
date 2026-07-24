uniform float uSize;
uniform vec2 uMouse;

void main() {

    vec3 pos = position;

    // Mouse position
    vec2 mouse = uMouse;

    // Distance from particle to mouse
    float dist = distance(pos.xy, mouse);

    // Repulsion radius
    float radius = 0.45;

    // Repulsion strength
    float strength = smoothstep(radius, 0.0, dist);

    // Direction away from mouse
    vec2 dir = normalize(pos.xy - mouse);

    // Push particles away
    pos.xy += dir * strength * 0.18;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    gl_PointSize = uSize;

    gl_PointSize *= (500.0 / -mvPosition.z);

    gl_Position = projectionMatrix * mvPosition;
}
