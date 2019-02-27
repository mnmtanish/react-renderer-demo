import { Shape } from '@createjs/easeljs';

/**
 * Source: https://gist.github.com/prometheansacrifice/43f93bffa5499888a88684100543518f#file-render-v1-js
 */

export default {
    /**
     * Create a new "instance" of your Element.
     */
    createInstance(_type, props, stage) {
        const { render, ...data } = props;
        const shape = new Shape();
        if (render) {
            render(shape, data);
        }
        return { shape, render, data };
    },

    /**
     * Applies a change to an instance.
     */
    commitUpdate(instance, payload, type, oldProps, newProps) {
        newProps.render(instance.shape);
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
