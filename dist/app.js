"use strict";
// console.log("Hello World!")
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }
    append(value) {
        const node = { value, next: null, prev: null };
        if (!this.head) {
            this.head = node;
            this.tail = node;
            node.next = null;
            node.prev = null;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    ;
    prepend(value) {
        const node = { value, next: null, prev: null };
        if (!this.head) {
            this.head = node;
            this.tail = node;
            node.next = null;
            node.prev = null;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }
    ;
    find(value) {
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value == value) {
                console.log(currentNode);
            }
            currentNode = currentNode.next;
        }
    }
    ;
    remove(value) {
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value == value) {
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                this.length--;
            }
            currentNode = currentNode.next;
        }
    }
    ;
    size() {
        console.log(this.length);
    }
}
const list = new LinkedList();
list.append(1).append(2).append(3).append(4).append(5).prepend(0).size();
console.log(list);
