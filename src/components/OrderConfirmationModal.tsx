import React from 'react';
import { 
  CheckCircle2, 
  Printer, 
  ShoppingBag, 
  MapPin, 
  Truck, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { OrderConfirmation } from '../types';
import { formatPrice } from '../utils/currency';

interface OrderConfirmationModalProps {
  order: OrderConfirmation | null;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#E7DFD5] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Card */}
        <div className="bg-[#241E1C] text-[#FAF7F2] p-6 text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#8E2827] text-white flex items-center justify-center mx-auto mb-2 shadow-md">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D9822B]">
            Order Confirmed & Loom Reserved
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Dhanyawad, {order.shippingAddress.fullName.split(' ')[0]}
          </h2>
          <p className="text-xs text-[#D5C8BA] max-w-md mx-auto">
            Your ethnic wear order <strong className="text-white font-mono">{order.orderId}</strong> has been received by our master atelier.
          </p>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1 text-xs">
          {/* Artisan Impact Note */}
          <div className="p-4 bg-[#F4EFEA] rounded-2xl border border-[#E7DFD5] flex items-start gap-3">
            <HeartHandshake className="w-5 h-5 text-[#8E2827] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="font-bold text-[#241E1C]">Direct Artisan Remuneration</h4>
              <p className="text-[#5D5049] leading-relaxed">
                By ordering through Vexo, you have provided fair-trade living wages directly to the weaver guilds of Varanasi, Chanderi, and Kanchipuram. We enclose a handwritten note from the artisan who inspected your drape.
              </p>
            </div>
          </div>

          {/* Delivery & Tracking Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-white rounded-xl border border-[#E7DFD5] space-y-1">
              <span className="text-[#8C7A6B] flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#8E2827]" />
                Estimated Doorstep Delivery
              </span>
              <p className="font-bold text-[#241E1C] text-sm">{order.estimatedDelivery}</p>
              <span className="text-[10px] text-[#3F4E3E]">Insured express transit</span>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-[#E7DFD5] space-y-1">
              <span className="text-[#8C7A6B] flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-[#D9822B]" />
                Tracking Reference
              </span>
              <p className="font-mono font-bold text-[#241E1C] text-sm">{order.trackingNumber}</p>
              <span className="text-[10px] text-[#78695E]">SMS updates sent to {order.shippingAddress.phone}</span>
            </div>
          </div>

          {/* Itemized Outfits */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#241E1C] border-b border-[#E7DFD5] pb-1.5">
              Selected Ethnic Outfits
            </h4>

            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="p-3 bg-white rounded-xl border border-[#E7DFD5] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-12 h-16 rounded-lg object-cover border border-[#E7DFD5]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h5 className="font-bold text-[#241E1C]">{item.product.title}</h5>
                      <p className="text-[#78695E]">Size: {item.size} · Qty: {item.quantity}</p>
                      {item.customTailoring && (
                        <span className="text-[10px] text-[#8E2827] font-semibold">
                          Custom Tailored Fit
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="font-bold text-[#241E1C] text-sm">
                    {formatPrice(item.product.price * item.quantity, order.currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address Summary */}
          <div className="p-4 bg-white rounded-xl border border-[#E7DFD5] space-y-1">
            <span className="text-[#8C7A6B] font-bold uppercase tracking-wider text-[10px]">
              Shipping To
            </span>
            <p className="font-bold text-[#241E1C]">{order.shippingAddress.fullName}</p>
            <p className="text-[#5D5049]">{order.shippingAddress.addressLine1}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}</p>
            <p className="text-[#5D5049]">Phone: {order.shippingAddress.phone} | Email: {order.shippingAddress.email}</p>
          </div>

          {/* Totals Summary */}
          <div className="p-4 bg-white rounded-xl border border-[#E7DFD5] space-y-1.5">
            <div className="flex justify-between text-[#78695E]">
              <span>Subtotal</span>
              <span>{formatPrice(order.subtotal, order.currency)}</span>
            </div>
            {order.discount > 0 && (
              <div className="flex justify-between text-[#3F4E3E] font-medium">
                <span>Heritage Promo Applied</span>
                <span>−{formatPrice(order.discount, order.currency)}</span>
              </div>
            )}
            <div className="flex justify-between text-[#78695E]">
              <span>Heirloom Muslin Packaging & Insured Shipping</span>
              <span className="text-[#3F4E3E] font-bold">COMPLIMENTARY</span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#241E1C] pt-2 border-t border-[#E7DFD5]">
              <span>Total Paid ({order.paymentMethod})</span>
              <span>{formatPrice(order.total, order.currency)}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-white border-t border-[#E7DFD5] flex items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl border border-[#E7DFD5] hover:bg-[#FAF7F2] text-[#241E1C] font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#78695E]" />
            <span>Print Invoice</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#8E2827] hover:bg-[#782221] text-white font-bold text-xs tracking-wide transition-colors cursor-pointer"
          >
            Continue Exploring Vexo
          </button>
        </div>
      </div>
    </div>
  );
};
