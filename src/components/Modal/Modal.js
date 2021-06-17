import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Modal = ({ modalData, modalClose, modalProductsData }) => {

  return modalData.product !== true ? (
    <div className={modalData.image != null ? styles.modalOpen : styles.modalClose} >
      <div className={styles.imageWrapper}>
        <p onClick={() => modalClose({ image: null, product: false })}>X</p>
        <img src={modalData.image != null ? modalData.image : undefined} alt=''></img>
      </div>
    </div>
  ) :
    (
      <div className={modalData.image != null ? styles.modalOpen : styles.modalClose}>
        {modalProductsData.map(data => {
          return data.id === modalData.id && (
            <div key={data.id} className={styles.wrapper}>
              <p onClick={() => modalClose({ image: null, product: false })}>X</p>
              <h3>{data.description}</h3>
              <h5>{data.priceChange}</h5>
              <Table>
                <TableHead>
                  {data.id === 5 || data.id === 6 ?
                    <TableRow>
                      <TableCell>Produkt</TableCell>
                      <TableCell align="right">Czas realizacji (dni)</TableCell>
                      <TableCell align="right">Cena netto (zł)</TableCell>
                    </TableRow> :
                    <TableRow>
                      <TableCell>Produkt</TableCell>
                      <TableCell align="right">Czas realizacji (dni)</TableCell>
                      <TableCell align="right">Jeden kanion cena netto (zł)</TableCell>
                      <TableCell align="right">Dwa kaniony cena netto (zł)</TableCell>
                      <TableCell align="right">Żywica pośrodku i po bokach netto (zł)</TableCell>
                    </TableRow>
                  }
                </TableHead>
                <TableBody>
                  {data.products.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell component="th" scope="row">
                        {product.name}
                      </TableCell>
                      <TableCell align="right">{product.date}</TableCell>
                      <TableCell align="right">{product.priceOne}</TableCell>
                      <TableCell align="right">{product.priceTwo}</TableCell>
                      <TableCell align="right">{product.priceThree}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )
        })}
      </div>
    )
}

Modal.propTypes = {
  modalData: PropTypes.object,
  modalClose: PropTypes.func,
  modalProductsData: PropTypes.array
}

export default Modal;