import { Stage } from '@createjs/easeljs';
import ReactReconciler from 'react-reconciler';
import HostConfig from './host-config.js';

/**
 * Create a new renderer.
 */
const Renderer = ReactReconciler(HostConfig);

/**
 * A map of containers.
 */
const containers = {};

/**
 * The render function.
 */
function render(elements, containerId, callback) {
    if (!containers[containerId]) {
        const container = new Stage(containerId);
        containers[containerId] = Renderer.createContainer(container, false, false);
    }
    Renderer.updateContainer(elements, containers[containerId], null, callback);
}

/**
 * Exports
 */
export default {
    render,
};
