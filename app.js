Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', './ux');
Ext.require(['Ext.ux.TextMaskPlugin'])

Ext.onReady(function() {
	
	Ext.define('App.Panel', {
		extend: 'Ext.form.Panel',
		frame: true,
		margin: 10,
		width: 250,
		renderTo: Ext.getBody(),
		fieldDefaults: {
			labelAlign: 'right',
			labelWidth: 80
		},
		
		constructor: function(c){
			if(!Ext.isArray(c.fbar)){
				c.fbar = [];
			}
			c.fbar.push({
				xtype: 'button',
				text: 'Mostrar dados',
				handler: function(){
					var v = this.findParentByType('form').getForm().getFieldValues();
					Ext.Msg.alert('Valores', Ext.encode(v));
				}
			})
			
			this.callParent(arguments)
		}
	})
	
	
	Ext.create('App.Panel', {
		title: 'Exemplo alternando com/sem mascara',
		items: [{
			xtype: 'textfield',
			plugins: 'textmask',
			ref: 'campo',
			fieldLabel: 'Sem Mascara',
			mask: '(99) 9999-9999',
			useMask: false,
			value: '0000000000'
		}],
		fbar: [{
			xtype: 'button',
			text: 'Ativar Mascara',
			ativo: false,
			handler: function(){
				var campo = this.up('form').down('textfield');
				
				if(this.ativo){
					campo.useMask = false;
					campo.setValue(campo.getValue());
					campo.labelEl.update('Sem Mascara:');
					
					this.setText('Ativar Mascara');
					this.ativo = false;
				}else{
					campo.useMask = true;
					campo.setValue(campo.getValue());
					campo.labelEl.update('Com Mascara:');
					
					this.setText('Desativar Mascara');
					this.ativo = true;
				}
			}
		}]
	})
	
	Ext.create('App.Panel', {
		title: 'Exemplo mascara dinheiro',
		items: [{
			xtype: 'textfield',
			plugins: 'textmask',
			fieldLabel: 'Valor',
			mask: 'R$ #9.999.990,00',
			money: true
		},{
			xtype: 'textfield',
			plugins: 'textmask',
			fieldLabel: 'Completo',
			mask: '% #0.0',
			money: true
		}]
	})
	
	Ext.create('App.Panel', {
		title: 'Exemplo mascara normal',
		items: [{
			xtype: 'textfield',
			plugins: 'textmask',
			fieldLabel: 'Telefone',
			mask: '(99) 9999-9999',
			money: false
		},{
			xtype: 'textfield',
			plugins: 'textmask',
			fieldLabel: 'celular',
			mask: '(99) 9999-9999',
			value: '7796685248',
			useMask: true,
			money: false
		},{
			xtype: 'textfield',
			plugins: 'textmask',
			fieldLabel: 'CPF',
			mask: '999.999.999-99',
			money: false
		},{
			xtype: 'textfield',
			plugins: 'textmask',
			fieldLabel: 'Placa',
			mask: 'AAA-9999',
			money: false
		}]
	})
	
	Ext.create('App.Panel', {
		title: 'Exemplo mascara data',
		items: [{
			xtype: 'datefield',
			plugins: 'textmask',
			fieldLabel: 'Data'
		}]
	})
	/*
	new Ext.Panel({
		title: 'Trocando mascara',
		renderTo: Ext.getBody(),
		style: 'margin: 10px',
		height: 'auto',
		width: 250,
		frame: true,
		items: [{
			xtype: 'form',
			items: [{
				xtype: 'textmask',
				fieldLabel: 'CPF',
				ref: 'cpf',
				mask: '999.999.999-99',
				money: false
			},{
				xtype: 'button',
				text: 'Mudar para CNPJ',
				cpf: true,
				handler: function(){
					if(this.cpf){
						this.findParentByType('form').cpf.setMask('99.999.999/9999-99');
						this.findParentByType('form').cpf.label.update('CNPJ:');
						this.setText('Mudar para CPF');
						this.cpf = false;
					}else{
						this.findParentByType('form').cpf.setMask('999.999.999-99');
						this.findParentByType('form').cpf.label.update('CPF:');
						this.setText('Mudar para CNPJ');
						this.cpf = true;
					}
				}
			},btMostrarDados]
		}]
	})
	
	new Ext.Panel({
		title: 'Exemplo mascara em grid',
		renderTo: Ext.getBody(),
		style: 'margin: 10px',
		height: 'auto',
		width: 250,
		frame: true,
		items: [{
			xtype: 'grid',
			autoHeight: true,
			store: {
				xtype: 'arraystore',
				fields: ['cpf', 'tel'],
				data: [
					['96582482514', '9658254155'],
					['10000000000', '5196587521'],
					['21121564132', '2152485672']
				]
			},
			columns: [{
				header: 'CPF',
				dataIndex: 'cpf',
				renderer: Ext.util.Format.maskRenderer('999.999.999-99')
			},{
				header: 'Telefone',
				dataIndex: 'tel',
				renderer: Ext.util.Format.maskRenderer('(99) 9999-9999')
			}]
		}]
	})
    */
    
});