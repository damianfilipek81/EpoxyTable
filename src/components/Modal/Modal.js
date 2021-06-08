import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Modal = ({ modalData, modalClose, modalProductsData }) => {

  return modalData.product !== true ? (
    <div className={modalData.image != null ? styles.modalOpen : styles.modalClose} onClick={() => modalClose({ image: null, product: false })}>
      <img src={modalData.image != null ? modalData.image : undefined} alt=''></img>
    </div>
  ) :
    (
      <div className={modalData.image != null ? styles.modalOpen : styles.modalClose} onClick={() => modalClose({ image: null, product: false })}>
        {modalProductsData.map(data => {
          return data.id === modalData.id && (
            <div key={data.id} className={styles.wrapper}>
              <h3>{data.description}</h3>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Produkt</TableCell>
                    <TableCell align="right">Czas realizacji</TableCell>
                    <TableCell align="right">Cena netto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.types.map((type) => (
                    <TableRow key={type}>
                      <TableCell component="th" scope="row">
                        {type}
                      </TableCell>
                    </TableRow>
                  ))}
                  {data.time.map(date => (
                    <TableRow key={date}>
                      <TableCell align="right">{date}</TableCell>
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