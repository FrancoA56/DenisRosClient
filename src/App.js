import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-detail" element={<PaymentDetail />} />
        <Route path="/order-follow" element={<OrderFollow />} />
        <Route path="/frequent-questions" element={<FrequentQuestions />} />
        <Route path="/term-conditions" element={<TermsConditions />} />
        <Route path="/policy-returns-changes" element={<PolicyOnReturnsAndChanges />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
