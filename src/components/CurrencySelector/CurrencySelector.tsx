import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { Button, Menu, MenuItem } from '@mui/material';

import { ErrorContext } from '@/contexts/ErrorContext';
import { SettingsContext } from '@/contexts/SettingsContext';

import { CoinGeckoService } from '@/services/coingecko';

export const CurrencySelector = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { dispatchError } = useContext(ErrorContext);

  const [currencies, setCurrencies] = useState(['usd', 'btc']);

  const { currency } = settings.general;
  const btn = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);

  const handleChange = (currency: string) => {
    updateSettings({ general: { currency } });
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const res = await CoinGeckoService.supportedVsCurrencies();
      if (res.ok) {
        const currencies = res.data.sort();
        setCurrencies(currencies);
      } else {
        dispatchError({
          type: 'ADD',
          payload: res.error,
        });
      }
    })();
  }, []);

  return (
    <>
      <Button color='secondary' ref={btn} onClick={handleOpen}>
        {currency.toUpperCase()}
      </Button>

      <Menu open={open} anchorEl={btn.current} onClose={handleClose}>
        {currencies.map((currency) => (
          <MenuItem key={currency} onClick={() => handleChange(currency)}>
            {currency.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
