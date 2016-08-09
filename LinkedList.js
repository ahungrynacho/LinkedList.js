//header linked list  
(function(){
    
    // function constructor
    var LN = function(value) {
        return new LN.init(value);
    }
    
    LN.init = function(value) {
        var self = this;
        self.value = value || null;
        self.next = null;
    }
    
    // methods and properties
    LN.prototype = {
        
        //private
        _size: 0,
        
        //public
        size: function() {
            // returns the total number of nodes
            return this._size;
        },
        
        print: function() {

            // print nothing the only node is the header node
            if (LN.prototype._size === 0) {
                return "";
            }
            
            // console.log the 'value' of each node, not including the header node  
            var self = this.next;
            var str = "" + self.value;
            self = self.next;
            for (; self != null; self = self.next) {
                str += " -> " + self.value;
            }
            return str;
        },
        
        add: function(index, value) {
            var self = this;
            if (arguments.length > 0) {
                LN.prototype._size++;
                // append node to the end
                if (arguments.length === 1) {
                    for (; self.next != null; self = self.next) {}
                    
                    self.next = LN(arguments[0]);
                    return true;
                }
                // insert node at the specified index
                else {  
                    for (var i = 0; i < index; i++) {
                        self = self.next;
                    }

                    var restOfList = self.next;
                    self.next = LN(value);

                    if (restOfList !== null)
                        self.next.next = restOfList;
                }
                return;
            }

        },
    
        remove: function(index) {
            // to skip the empty header node
            var self = this;
            var argLength = arguments.length;
            
            if (index !== parseInt(index, 10)) {
                throw ": arg must be an integer";
            }
            else if (index < 0 || index >= LN.prototype._size) {
                throw ": index out of bounds";
            }
            
            // removes the node at the specified index or at the front

            for (var i = 0; i < index; i++) {
                self = self.next;
            }
            var valueToDelete = self.next.value;
            self.next = self.next.next;
            LN.prototype._size--;

            return valueToDelete;
        },
        
        clear: function() {
            // removes all nodes by pointing the header node to null 
            this.next = null;
            LN.prototype._size = 0;
            return;
        },
        
        get: function(index) {
            // returns the element at the index
            if (index >= LN.prototype._size) {
                throw ": index out of bounds";
            }
                var self = this.next;
                for (var i = 0; i < index; i++) {
                    self = self.next;
                }
                return self.value;

        },
        indexOf: function(obj) {
            // returns the index of the object found
            var index = 0;
            
            if (LN.prototype._size > 0) {
                for (var self = this.next; self != null; self = self.next) {
                    if (self.value === obj) {
                        return index;
                    }
                    index++;
                }
                throw ": object nonexistent";
            }
        }
    };
    
    LN.init.prototype = LN.prototype;
    window.LN = LN;
    
}());


