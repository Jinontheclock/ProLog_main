import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

// Icon name mapping from image names to Material Icons
export const ICON_NAMES = {
  // Navigation icons
  'chevron_right': 'chevron-right',
  'chevron_right1': 'chevron-right',
  'arrow_forward': 'arrow-forward',
  'arrow_outward': 'arrow-forward',
  'arrow_outward_black': 'arrow-forward',
  'icon-arrow-forward': 'arrow-forward',
  'icon-arrow-outward': 'arrow-forward',
  'icon-arrow-right': 'arrow-forward',
  'icon-arrow-back': 'arrow-back',
  'icon-back-button': 'arrow-back',
  'icon-dropdown-arrow': 'keyboard-arrow-down',
  
  // Action icons
  'expand_more_up': 'expand-less',
  'expand_more_down': 'expand-more',
  'icon-close': 'close',
  'icon-add': 'add',
  'icon-delete': 'delete',
  'check': 'check',
  'icon-check': 'check',
  'check_box': 'check-box',
  'icon-bookmark-check': 'bookmark',
  'icon-cached': 'cached',
  'cached': 'cached',
  
  // Info & Status icons
  'info': 'info',
  'lightbulb': 'lightbulb',
  'icon-lightbulb': 'lightbulb',
  'celebration': 'celebration',
  'icon-celebration': 'celebration',
  'help_outline': 'help-outline',
  'warning_amber': 'warning',
  'more_horiz': 'more-horiz',
  'icon-lock': 'lock-open',
  
  // Time & Money icons
  'schedule': 'schedule',
  'electric_bolt': 'bolt',
  'paid': 'attach-money',
  'account_balance_wallet': 'account-balance-wallet',
  
  // Document icons
  'document_scanner': 'document-scanner',
  'ios_share': 'ios-share',
  'icon-assignment': 'assignment',
  
  // Media icons
  'icon-volume': 'volume-up',
  'icon-pause': 'pause',
  'icon-progress': 'autorenew',
  'cached': 'autorenew',
  'icon-refresh': 'autorenew',

    // Audio player icons
    'play_arrow': 'play-arrow',
    'pause': 'pause',
    'volume_down': 'volume-down',
    'volume_off': 'volume-off',
    'restart': 'replay',
    'more_vert': 'more-vert',  // User & Settings icons
  'icon-account': 'person',
  'icon-notifications': 'notifications',
  'icon-accessibility': 'accessibility',
  'icon-brightness': 'brightness-6',
  
  // Other icons
  'icon-bell': 'notifications',
  'icon-search': 'search',
  'house': 'home',
  'icon-house': 'home',
} as const;

interface MaterialIconProps {
  name: keyof typeof ICON_NAMES;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ 
  name, 
  size = 24, 
  color = '#000', 
  style 
}) => {
  const iconName = ICON_NAMES[name];
  
  return (
    <MaterialIcons 
      name={iconName as any} 
      size={size} 
      color={color} 
      style={style}
    />
  );
};

export default MaterialIcon;
