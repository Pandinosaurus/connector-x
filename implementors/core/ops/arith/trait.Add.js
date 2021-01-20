(function() {var implementors = {};
implementors["chrono"] = [{"text":"impl Add&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Add&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["ndarray"] = [{"text":"impl&lt;I&gt; Add&lt;Dim&lt;I&gt;&gt; for Dim&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Dim&lt;I&gt;: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Add&lt;usize&gt; for Dim&lt;[Ix; 1]&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A, B, S, S2, D, E&gt; Add&lt;ArrayBase&lt;S2, E&gt;&gt; for ArrayBase&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Clone + Add&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = A&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: Data&lt;Elem = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, B, S, S2, D, E&gt; Add&lt;&amp;'a ArrayBase&lt;S2, E&gt;&gt; for ArrayBase&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Clone + Add&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = A&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: Data&lt;Elem = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, B, S, S2, D, E&gt; Add&lt;&amp;'a ArrayBase&lt;S2, E&gt;&gt; for &amp;'a ArrayBase&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Clone + Add&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: Data&lt;Elem = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, S, D, B&gt; Add&lt;B&gt; for ArrayBase&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Clone + Add&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = A&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: ScalarOperand,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, S, D, B&gt; Add&lt;B&gt; for &amp;'a ArrayBase&lt;S, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Clone + Add&lt;B, Output = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: ScalarOperand,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for i8 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = i8&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for i8 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = i8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for u8 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = u8&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for u8 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = u8&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for i16 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = i16&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for i16 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = i16&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for u16 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = u16&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for u16 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = u16&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for i32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = i32&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for i32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = i32&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for u32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = u32&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for u32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = u32&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for i64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = i64&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for i64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = i64&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for u64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = u64&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for u64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = u64&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for i128 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = i128&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for i128 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = i128&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for u128 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = u128&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for u128 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = u128&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for f32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = f32&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for f32 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = f32&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for f64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = f64&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for f64 <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = f64&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for Complex&lt;f32&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = Complex&lt;f32&gt;&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for Complex&lt;f32&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = Complex&lt;f32&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S, D&gt; Add&lt;ArrayBase&lt;S, D&gt;&gt; for Complex&lt;f64&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: DataOwned&lt;Elem = Complex&lt;f64&gt;&gt; + DataMut,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, S, D&gt; Add&lt;&amp;'a ArrayBase&lt;S, D&gt;&gt; for Complex&lt;f64&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Data&lt;Elem = Complex&lt;f64&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Dimension,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl Add&lt;u8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl Add&lt;u16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;usize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b usize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl Add&lt;usize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i8&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i8","synthetic":false,"types":[]},{"text":"impl Add&lt;i8&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i16&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i16","synthetic":false,"types":[]},{"text":"impl Add&lt;i16&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;isize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b isize&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b isize","synthetic":false,"types":[]},{"text":"impl Add&lt;isize&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for isize","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl Add&lt;u32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;u64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;u128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i32&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i32","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i64&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i64","synthetic":false,"types":[]},{"text":"impl Add&lt;BigInt&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigInt&gt; for &amp;'a i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;i128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigInt&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b i128&gt; for &amp;'a BigInt","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigInt&gt; for &amp;'b i128","synthetic":false,"types":[]},{"text":"impl Add&lt;i32&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;i64&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;i128&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigUint&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u8&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u8&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl Add&lt;u8&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u16&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u16&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl Add&lt;u16&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;usize&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b usize&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl Add&lt;usize&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for usize","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u32&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u32&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u64&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u64&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl Add&lt;BigUint&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a u128&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;BigUint&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;u128&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a BigUint&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b u128&gt; for &amp;'a BigUint","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a BigUint&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl Add&lt;u32&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;u64&gt; for BigUint","synthetic":false,"types":[]},{"text":"impl Add&lt;u128&gt; for BigUint","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Num&gt; Add&lt;&amp;'b Complex&lt;T&gt;&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Add&lt;Complex&lt;T&gt;&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Add&lt;&amp;'a Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Add&lt;Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Add&lt;T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Add&lt;&amp;'a T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Add&lt;T&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Num&gt; Add&lt;&amp;'a T&gt; for &amp;'b Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;usize&gt;&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;usize&gt;&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;usize&gt;&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;u8&gt;&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;u8&gt;&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;u8&gt;&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;u16&gt;&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;u16&gt;&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;u16&gt;&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;u32&gt;&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;u32&gt;&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;u32&gt;&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;u64&gt;&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;u64&gt;&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;u64&gt;&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;u128&gt;&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;u128&gt;&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;u128&gt;&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;isize&gt;&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;isize&gt;&gt; for &amp;'a isize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;isize&gt;&gt; for &amp;'b isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;i8&gt;&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;i8&gt;&gt; for &amp;'a i8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;i8&gt;&gt; for &amp;'b i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;i16&gt;&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;i16&gt;&gt; for &amp;'a i16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;i16&gt;&gt; for &amp;'b i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;i32&gt;&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;i32&gt;&gt; for &amp;'a i32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;i32&gt;&gt; for &amp;'b i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;i64&gt;&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;i64&gt;&gt; for &amp;'a i64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;i64&gt;&gt; for &amp;'b i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;i128&gt;&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;i128&gt;&gt; for &amp;'a i128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;i128&gt;&gt; for &amp;'b i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;f32&gt;&gt; for f32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;f32&gt;&gt; for &amp;'a f32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;f32&gt;&gt; for &amp;'b f32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;&amp;'a Complex&lt;f64&gt;&gt; for f64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Add&lt;Complex&lt;f64&gt;&gt; for &amp;'a f64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'a Complex&lt;f64&gt;&gt; for &amp;'b f64","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;usize&gt;&gt; for usize","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;u8&gt;&gt; for u8","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;u16&gt;&gt; for u16","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;u32&gt;&gt; for u32","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;u64&gt;&gt; for u64","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;u128&gt;&gt; for u128","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;isize&gt;&gt; for isize","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;i8&gt;&gt; for i8","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;i16&gt;&gt; for i16","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;i32&gt;&gt; for i32","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;i64&gt;&gt; for i64","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;i128&gt;&gt; for i128","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;f32&gt;&gt; for f32","synthetic":false,"types":[]},{"text":"impl Add&lt;Complex&lt;f64&gt;&gt; for f64","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Add&lt;&amp;'b Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Add&lt;&amp;'b T&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Add&lt;Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Add&lt;T&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Add&lt;&amp;'a Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Add&lt;&amp;'a T&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Add&lt;Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Add&lt;T&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNum&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNum","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNum&gt; for &amp;'a BigNum","synthetic":false,"types":[]}];
implementors["pyo3"] = [{"text":"impl&lt;'py&gt; Add&lt;&amp;'py PyComplex&gt; for &amp;'py PyComplex","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Add&lt;Duration&gt; for Date","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Date","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for StdDuration","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for StdInstant","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for SystemTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Time","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Time","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Add&lt;Duration&gt; for Instant","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl&lt;I:&nbsp;Integer&gt; Add&lt;I&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Add&lt;Z0&gt; for PInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Add&lt;Z0&gt; for NInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;PInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;NInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;NInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Cmp&lt;Ur&gt; + PrivateIntegerAdd&lt;&lt;Ul as Cmp&lt;Ur&gt;&gt;::Output, Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;PInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: Cmp&lt;Ul&gt; + PrivateIntegerAdd&lt;&lt;Ur as Cmp&lt;Ul&gt;&gt;::Output, Ul&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Add&lt;B0&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Add&lt;B0&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl Add&lt;B1&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Add&lt;B1&gt; for UInt&lt;U, B0&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Add&lt;B1&gt; for UInt&lt;U, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Add&lt;B1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Add1&lt;U&gt;: Unsigned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Add&lt;U&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Add&lt;UTerm&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sum&lt;Ul, Ur&gt;: Add&lt;B1&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Add&lt;ATerm&gt; for ATerm","synthetic":false,"types":[]},{"text":"impl&lt;Al, Vl, Ar, Vr&gt; Add&lt;TArr&lt;Vr, Ar&gt;&gt; for TArr&lt;Vl, Al&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Al: Add&lt;Ar&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vl: Add&lt;Vr&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()