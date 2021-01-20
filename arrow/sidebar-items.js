initSidebarItems({"mod":[["array","The central type in Apache Arrow are arrays, represented by the `Array` trait. An array represents a known-length sequence of values all having the same type."],["bitmap","Defines a bitmap, which is used to track which values in an Arrow array are null. This is called a \"validity bitmap\" in the Arrow documentation."],["buffer","The main type in the module is `Buffer`, a contiguous immutable memory region of fixed size aligned at a 64-byte boundary. `MutableBuffer` is like `Buffer`, but it can be mutated and grown."],["bytes","This module contains an implementation of a contiguous immutable memory region that knows how to de-allocate itself, [`Bytes`]. Note that this is a low-level functionality of this crate."],["compute","Computation kernels on Arrow Arrays"],["csv","Transfer data between the Arrow memory format and CSV (comma-separated values)."],["datatypes","Defines the logical data types of Arrow arrays."],["error","Defines `ArrowError` for representing failures in various Arrow operations."],["ffi","Contains declarations to bind to the C Data Interface."],["ipc",""],["json","Transfer data between the Arrow memory format and JSON line-delimited records."],["memory","Defines memory-related functions, such as allocate/deallocate/reallocate memory regions, cache and allocation alignments."],["record_batch","A two-dimensional batch of column-oriented data with a defined schema."],["tensor","Arrow Tensor Type, defined in `format/Tensor.fbs`."],["util",""]]});