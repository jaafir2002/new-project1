import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building, 
  Banknote, 
  CheckCircle2, 
  Truck, 
  Lock, 
  ChevronRight, 
  Sparkles,
  Scissors
} from 'lucide-react';
import { CartItem, Currency, ShippingAddress, OrderConfirmation } from '../types';
import { formatPrice } from '../utils/currency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  discountAmount: number;
  onOrderSuccess: (order: OrderConfirmation) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  discountAmount,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [packaging, setPackaging] = useState<'heirloom' | 'eco'>('heirloom');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [upiApp, setUpiApp] = useState<'gpay' | 'phonepe' | 'paytm' | 'qr'>('gpay');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: 'Jaafir Hussain',
    email: 'jaafir2002@gmail.com',
    phone: '+91 98765 43210',
    addressLine1: 'Villa 14, Heritage Palm Grove, MG Road',
    addressLine2: 'Near Royal Palace Gardens',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    country: 'India',
    specialInstructions: 'Please ring bell twice; delicate handloom package.'
  });

  const subtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shippingFee = 0; // Free express delivery
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderId = `VEXO-${Math.floor(100000 + Math.random() * 900000)}`;
      const trackingNumber = `IND-EX-${Math.floor(10000000 + Math.random() * 90000000)}`;
      
      const newOrder: OrderConfirmation = {
        orderId,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        items: [...items],
        shippingAddress: formData,
        paymentMethod: paymentMethod.toUpperCase(),
        packagingType: packaging,
        subtotal,
        discount: discountAmount,
        shippingFee: 0,
        total: finalTotal,
        currency,
        estimatedDelivery: '3 - 5 business days (Insured Express)',
        trackingNumber
      };

      setIsProcessing(false);
      onOrderSuccess(newOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl border border-[#E7DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-b border-[#E7DFD5]">
          <div className="flex items-center gap-3">
            <div className="font-serif text-2xl font-bold tracking-wider text-[#241E1C]">VEXO</div>
            <span className="text-xs text-[#8C7A6B] border-l border-[#E7DFD5] pl-3">
              Seamless Heritage Checkout
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F4EFEA] text-[#241E1C] transition-colors cursor-pointer"
            aria-label="Close Checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Indicator */}
        <div className="px-6 py-3 bg-[#F5EFEB] border-b border-[#E7DFD5] flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#8E2827] text-white' : 'bg-[#E7DFD5] text-[#78695E]'}`}>
              1
            </span>
            <span className={step >= 1 ? 'text-[#241E1C]' : 'text-[#8C7A6B]'}>Delivery Address</span>
          </div>

          <div className="h-0.5 w-12 bg-[#E7DFD5] hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#8E2827] text-white' : 'bg-[#E7DFD5] text-[#78695E]'}`}>
              2
            </span>
            <span className={step >= 2 ? 'text-[#241E1C]' : 'text-[#8C7A6B]'}>Heirloom Packaging</span>
          </div>

          <div className="h-0.5 w-12 bg-[#E7DFD5] hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-[#8E2827] text-white' : 'bg-[#E7DFD5] text-[#78695E]'}`}>
              3
            </span>
            <span className={step >= 3 ? 'text-[#241E1C]' : 'text-[#8C7A6B]'}>Payment Method</span>
          </div>
        </div>

        {/* Main Body Grid */}
        <div className="overflow-y-auto p-6 lg:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Steps Form */}
            <div className="lg:col-span-7 space-y-6">
              {/* STEP 1: Shipping Address */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-serif text-lg font-bold text-[#241E1C]">
                    Where should we deliver your handloom pieces?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[#78695E] mb-1 font-medium">Full Recipient Name</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#78695E] mb-1 font-medium">Phone Number (For Delivery SMS)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[#78695E] mb-1 font-medium">Email Address (For Weaving Tracking & Invoice)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[#78695E] mb-1 font-medium">Street Address / House / Apartment</label>
                      <input
                        type="text"
                        value={formData.addressLine1}
                        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[#78695E] mb-1 font-medium">Landmark / Locality (Optional)</label>
                      <input
                        type="text"
                        value={formData.addressLine2}
                        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#78695E] mb-1 font-medium">City</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#78695E] mb-1 font-medium">State</label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#78695E] mb-1 font-medium">PIN / Postal Code</label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#78695E] mb-1 font-medium">Country</label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full p-2.5 bg-white rounded-xl border border-[#E7DFD5] focus:outline-none focus:border-[#8E2827]"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#8E2827] hover:bg-[#782221] text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Continue to Packaging</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Packaging Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-serif text-lg font-bold text-[#241E1C]">
                    Choose Your Presentation Packaging
                  </h3>

                  <div className="space-y-3">
                    <label
                      onClick={() => setPackaging('heirloom')}
                      className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                        packaging === 'heirloom'
                          ? 'bg-white border-[#8E2827] ring-2 ring-[#8E2827]/15 shadow-xs'
                          : 'bg-white border-[#E7DFD5] hover:border-[#8E2827]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="packaging"
                        checked={packaging === 'heirloom'}
                        onChange={() => setPackaging('heirloom')}
                        className="mt-1 text-[#8E2827] accent-[#8E2827]"
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-[#241E1C]">
                            Royal Heirloom Muslin Box (Complimentary)
                          </span>
                          <span className="px-2 py-0.5 bg-[#8E2827]/10 text-[#8E2827] text-[10px] font-bold rounded-full">
                            Recommended
                          </span>
                        </div>
                        <p className="text-xs text-[#6B5E57]">
                          Includes an unbleached organic muslin garment bag, natural cedar wood moth deterrent balls, and a personalized wax-sealed certificate of handloom provenance.
                        </p>
                      </div>
                    </label>

                    <label
                      onClick={() => setPackaging('eco')}
                      className={`p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-all ${
                        packaging === 'eco'
                          ? 'bg-white border-[#8E2827] ring-2 ring-[#8E2827]/15 shadow-xs'
                          : 'bg-white border-[#E7DFD5] hover:border-[#8E2827]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="packaging"
                        checked={packaging === 'eco'}
                        onChange={() => setPackaging('eco')}
                        className="mt-1 text-[#8E2827] accent-[#8E2827]"
                      />
                      <div className="space-y-1">
                        <span className="font-bold text-xs text-[#241E1C]">
                          Minimalist Recycled Kraft Wrap
                        </span>
                        <p className="text-xs text-[#6B5E57]">
                          100% biodegradable corrugated cardboard and recycled paper with minimal outer volume.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-[#78695E] hover:text-[#241E1C] cursor-pointer"
                    >
                      ← Back to Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#8E2827] hover:bg-[#782221] text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Continue to Payment</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Payment Method */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-serif text-lg font-bold text-[#241E1C]">
                    Select Payment Method
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        paymentMethod === 'upi'
                          ? 'bg-white border-[#8E2827] ring-2 ring-[#8E2827]/20 text-[#8E2827]'
                          : 'bg-white border-[#E7DFD5] text-[#5D5049]'
                      }`}
                    >
                      <Smartphone className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-bold block">UPI / QR</span>
                      <span className="text-[10px] text-[#8C7A6B]">GPay, PhonePe</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'bg-white border-[#8E2827] ring-2 ring-[#8E2827]/20 text-[#8E2827]'
                          : 'bg-white border-[#E7DFD5] text-[#5D5049]'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-bold block">Card</span>
                      <span className="text-[10px] text-[#8C7A6B]">Visa, MC, RuPay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        paymentMethod === 'netbanking'
                          ? 'bg-white border-[#8E2827] ring-2 ring-[#8E2827]/20 text-[#8E2827]'
                          : 'bg-white border-[#E7DFD5] text-[#5D5049]'
                      }`}
                    >
                      <Building className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-bold block">Net Banking</span>
                      <span className="text-[10px] text-[#8C7A6B]">All Major Banks</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        paymentMethod === 'cod'
                          ? 'bg-white border-[#8E2827] ring-2 ring-[#8E2827]/20 text-[#8E2827]'
                          : 'bg-white border-[#E7DFD5] text-[#5D5049]'
                      }`}
                    >
                      <Banknote className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-bold block">Cash on Delivery</span>
                      <span className="text-[10px] text-[#8C7A6B]">With OTP Verify</span>
                    </button>
                  </div>

                  {/* Payment Details Container */}
                  <div className="p-4 bg-white rounded-2xl border border-[#E7DFD5] space-y-3">
                    {paymentMethod === 'upi' && (
                      <div className="space-y-3">
                        <p className="text-xs font-semibold text-[#241E1C]">Select UPI Mode:</p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => setUpiApp('gpay')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                              upiApp === 'gpay' ? 'bg-[#8E2827] text-white border-[#8E2827]' : 'border-[#E7DFD5] text-[#4A3E39]'
                            }`}
                          >
                            Google Pay
                          </button>
                          <button
                            type="button"
                            onClick={() => setUpiApp('phonepe')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                              upiApp === 'phonepe' ? 'bg-[#8E2827] text-white border-[#8E2827]' : 'border-[#E7DFD5] text-[#4A3E39]'
                            }`}
                          >
                            PhonePe
                          </button>
                          <button
                            type="button"
                            onClick={() => setUpiApp('paytm')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                              upiApp === 'paytm' ? 'bg-[#8E2827] text-white border-[#8E2827]' : 'border-[#E7DFD5] text-[#4A3E39]'
                            }`}
                          >
                            PayTM UPI
                          </button>
                          <button
                            type="button"
                            onClick={() => setUpiApp('qr')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                              upiApp === 'qr' ? 'bg-[#8E2827] text-white border-[#8E2827]' : 'border-[#E7DFD5] text-[#4A3E39]'
                            }`}
                          >
                            Scan Instant QR Code
                          </button>
                        </div>

                        {upiApp === 'qr' ? (
                          <div className="p-3 bg-[#FAF7F2] rounded-xl text-center space-y-2 border border-[#E7DFD5]">
                            <div className="w-32 h-32 mx-auto bg-white border-2 border-[#241E1C] rounded-lg p-2 flex items-center justify-center">
                              {/* Stylized QR mockup */}
                              <div className="grid grid-cols-6 gap-1 w-full h-full p-1 bg-black/5">
                                {[...Array(36)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className={`rounded-xs ${i % 2 === 0 || i % 7 === 0 ? 'bg-[#241E1C]' : 'bg-transparent'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-[11px] text-[#78695E]">Scan with any UPI app to pay {formatPrice(finalTotal, currency)}</p>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <label className="text-xs text-[#78695E]">Enter UPI ID / VPA</label>
                            <input
                              type="text"
                              defaultValue="jaafir2002@oksbi"
                              className="w-full text-xs p-2.5 rounded-xl border border-[#E7DFD5] bg-[#FAF7F2] focus:outline-none focus:border-[#8E2827]"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <div className="space-y-2 text-xs">
                        <div>
                          <label className="text-[#78695E] block mb-1">Cardholder Name</label>
                          <input
                            type="text"
                            defaultValue={formData.fullName}
                            className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[#78695E] block mb-1">Card Number</label>
                          <input
                            type="text"
                            defaultValue="•••• •••• •••• 8842"
                            className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl focus:outline-none font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[#78695E] block mb-1">Expiry (MM/YY)</label>
                            <input
                              type="text"
                              defaultValue="08/29"
                              className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-[#78695E] block mb-1">CVV</label>
                            <input
                              type="password"
                              defaultValue="•••"
                              className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'netbanking' && (
                      <div className="space-y-2 text-xs">
                        <label className="text-[#78695E] block">Select Banking Partner</label>
                        <select className="w-full p-2.5 bg-[#FAF7F2] border border-[#E7DFD5] rounded-xl focus:outline-none font-medium">
                          <option>HDFC Bank (Instant Verification)</option>
                          <option>State Bank of India</option>
                          <option>ICICI Bank</option>
                          <option>Axis Bank</option>
                          <option>Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    )}

                    {paymentMethod === 'cod' && (
                      <div className="space-y-1 text-xs text-[#5D5049]">
                        <p className="font-semibold text-[#241E1C]">Cash on Delivery Available:</p>
                        <p>
                          An automated OTP verification will be sent to <strong>{formData.phone}</strong> before loom dispatch. Please keep cash or UPI ready at the time of delivery.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-semibold text-[#78695E] hover:text-[#241E1C] cursor-pointer"
                    >
                      ← Back to Packaging
                    </button>
                    <button
                      type="button"
                      disabled={isProcessing}
                      onClick={handlePlaceOrder}
                      className="px-8 py-3.5 bg-[#8E2827] hover:bg-[#782221] disabled:bg-[#8E2827]/50 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Authorizing Order with Loom...</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>Authorize & Place Order · {formatPrice(finalTotal, currency)}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Order Summary Sidebar */}
            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#E7DFD5] space-y-4 h-fit">
              <h4 className="font-serif text-base font-bold text-[#241E1C] border-b border-[#E7DFD5] pb-2">
                Order Summary ({items.length} {items.length === 1 ? 'Garment' : 'Garments'})
              </h4>

              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 text-xs">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-12 h-16 rounded-lg object-cover border border-[#E7DFD5] shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <h5 className="font-bold text-[#241E1C] line-clamp-1">{item.product.title}</h5>
                      <span className="text-[#78695E] block">Size: {item.size} · Qty: {item.quantity}</span>
                      {item.customTailoring && (
                        <span className="text-[10px] text-[#8E2827] flex items-center gap-1 mt-0.5">
                          <Scissors className="w-3 h-3" />
                          Bespoke Tailoring
                        </span>
                      )}
                      <span className="font-bold text-[#241E1C] mt-1 block">
                        {formatPrice(item.product.price * item.quantity, currency)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-3 border-t border-[#E7DFD5] text-xs">
                <div className="flex justify-between text-[#78695E]">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal, currency)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#3F4E3E] font-semibold">
                    <span>Heritage Promo</span>
                    <span>−{formatPrice(discountAmount, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#78695E]">
                  <span>Insured Express Shipping</span>
                  <span className="text-[#3F4E3E] font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#241E1C] pt-2 border-t border-[#E7DFD5]">
                  <span>Total Due</span>
                  <span>{formatPrice(finalTotal, currency)}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-2 border-t border-[#E7DFD5] space-y-1.5 text-[11px] text-[#6B5E57]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3F4E3E]" />
                  <span>100% Silk Mark Authenticated Handloom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#8E2827]" />
                  <span>Insured doorstep transit with real-time SMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
