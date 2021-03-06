import { Shape } from '@createjs/easeljs';

/**
 * HostConfig for EaselJS Renderer
 * based on: https://git.io/fhNyH
 */
export default {
    /**
     * Create a new "instance" of your Element.
     */
    createInstance(_type, props, stage) {
        const { render, ...data } = props;
        const shape = new Shape();
        render(shape.graphics);
        return { shape, render, data };
    },

    /**
     * Applies a change to an instance.
     */
    commitUpdate(instance, payload, type, oldProps, newProps) {
        newProps.render(instance.shape.graphics);
        instance.shape.stage.update();
    },

    /**
     * Adds an instance to a container.
     */
    appendChildToContainer(stage, child) {
        stage.addChild(child.shape);
        stage.update();
    },

    /**
     * ...... and some other stuff.
     */

    isPrimaryRenderer: true,
    scheduleDeferredCallback: "",
    cancelDeferredCallback: "",
    supportsMutation: true,

    getRootHostContext() {
        return {}
    },

    getChildHostContext() {
        // TODO ...
        return {};
    },

    getPublicInstance() {
        // TODO ...
    },

    prepareForCommit() {
        // TODO ...
    },

    resetAfterCommit() {
        // TODO ...
    },

    appendInitialChild(parent, child) {
        // TODO ...
    },

    finalizeInitialChildren() {
        // TODO ...
    },

    prepareUpdate(instance, type, oldProps, newProps) {
        return [null];
    },

    shouldSetTextContent(type, props) {
        return false;
    },

    shouldDeprioritizeSubtree(type, props) {
        // TODO ...
    },

    createTextInstance() {
        return null;
    },

    now() {
        return Date.now();
    },

    commitMount(domElement, type, newProps, internalInstanceHandle) {
        // TODO ...
    },

    resetTextContent(domElement) {
    },

    commitTextUpdate(textInstance, oldText, newText) {
        // ...
    },

    appendChild(parentInstance, child) {
    },

    insertBefore(parentInstance, child, beforeChild) {
        // TODO ...
    },

    insertInContainerBefore(container, child, beforeChild) {
        // TODO ...
    },

    removeChild(parentInstance, child) {
        // TODO ...
    },

    removeChildFromContainer(container, child) {
        // TODO ...
    }
};
