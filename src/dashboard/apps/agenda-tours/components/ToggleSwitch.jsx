import React from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({ id, checked, onChange, disabled, label }) {
  return (
    <label className="toggle-switch">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="slider" />
      {label && <span className="toggle-label">{label}</span>}
    </label>
  );
}
